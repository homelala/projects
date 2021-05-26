package org.web.controller;

import java.util.List;
import java.util.Locale;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.GenericXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.web.domain.InfoVO;
import org.web.service.InfoService;

@Controller
@RequestMapping(value = "/contact")
public class MailController {
	private static ApplicationContext ctx = null;
	
	private static final Logger logger = LoggerFactory.getLogger(MailController.class);

	
	@Autowired(required = true)
	private InfoService infoService;

	@RequestMapping(value = { "/create" }, method = RequestMethod.POST)
	public String createMsg(@ModelAttribute("info") InfoVO vo) throws Exception {
		ctx = new GenericXmlApplicationContext("classpath:applicationContext.xml");
		InfoService infoservice = ctx.getBean(InfoService.class);
		
		try {
			infoservice.createInfo(vo);
			System.out.println("TRANSACTION 처리 완료");
		} catch(Exception e) {
			System.out.println("TRANSACTION ERROR:"+e);
		}
		
		return "redirect:/";
	}

	@RequestMapping(value = { "/delete" }, method = RequestMethod.POST)
	public String deleteMsg(int id,Model model,HttpSession session) throws Exception {
		System.out.println("delete" + id);
		String msg  = "";
		String sessionId = (String) session.getAttribute("id");
		System.out.println("id"+sessionId);
		if(sessionId == null) {
			msg = "로그인이 필요한 서비스입니다.";
			model.addAttribute("msg",msg);
			return "index";
		}else {
			infoService.delete(id);
			return "redirect:/contact?page=1";
		}
		
	}

	@RequestMapping(value = "/read", method = RequestMethod.GET)
	public String readMember(@RequestParam("id") String id, Model model) throws Exception {
		InfoVO info = infoService.readInfo(Integer.parseInt(id));
		
		model.addAttribute("info", info);
		return "info";
	}
	
	@RequestMapping(value = "/readMarked", method = RequestMethod.GET)
	public String contact(@RequestParam("page") String page, Model model) throws Exception {
		List<InfoVO> info;
		System.out.println(page);
		info= infoService.readMarkedList((Integer.parseInt(page)-1)*5);
		int len = infoService.countMarkedList();
		
		model.addAttribute("info",info);
		model.addAttribute("len",len);
		model.addAttribute("page",page);
		return "markedContact";
	}
	
	@RequestMapping(value = { "/updateMark" }, method = RequestMethod.POST)
	public String UpdateMarkMsg(int id,Model model,HttpSession session) throws Exception {
		ctx = new GenericXmlApplicationContext("classpath:applicationContext.xml");
		InfoService infoservice = ctx.getBean(InfoService.class);
		System.out.println("update" + id);
		
		String msg  = "";
		String sessionId = (String) session.getAttribute("id");
		if(sessionId == null) {
			msg = "로그인이 필요한 서비스입니다.";
			model.addAttribute("msg",msg);
			return "index";
		}else {
			infoservice.updateMark(id);
			return "redirect:/contact?page=1";
		}
		
	}
	
	@RequestMapping(value = { "/updateUnMark" }, method = RequestMethod.POST)
	public String UpdateUnMarkMsg(int id,Model model,HttpSession session) throws Exception {
		System.out.println("update" + id);
		
		String msg  = "";
		String sessionId = (String) session.getAttribute("id");
		if(sessionId == null) {
			msg = "로그인이 필요한 서비스입니다.";
			model.addAttribute("msg",msg);
			return "index";
		}else {
			infoService.updateUnMark(id);
			return "redirect:/contact?page=1";
		}
	}
}
