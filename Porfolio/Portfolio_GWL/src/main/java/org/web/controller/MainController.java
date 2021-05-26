package org.web.controller;


import java.util.List;
import java.util.Locale;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.web.domain.InfoVO;
import org.web.domain.PageVO;
import org.web.domain.UserVO;
import org.web.service.InfoService;
import org.web.service.UserService;

@Controller
public class MainController {
	
	private static final Logger logger = LoggerFactory.getLogger(MainController.class);
	
	@Autowired(required=true)
	private UserService userService;
	@Autowired(required=true)
	private InfoService infoService;
	
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) throws Exception{
		logger.info("Welcome home! The client locale is {}.", locale);
		
		return "index";
	}
	
	@RequestMapping(value = "/logIn", method = RequestMethod.GET)
	public String signIn(Locale locale, Model model,HttpSession session) throws Exception{
		logger.info("login");
		return "logIn";
	}
	
	@RequestMapping(value = {"/logIn"}, method = RequestMethod.POST)
	public String signInPost(String email,String password,HttpSession session,Model model) throws Exception{
		System.out.println(email+" "+password);
		UserVO user = userService.checkID(email);
		String message = "";
		
		if(user != null) {
			System.out.println(user.getPassword()+" "+password);
			if(user.getPassword().equals(password)) {
				session.setAttribute("id", user.getID());
				return "redirect:/";
			}
		}
		message="잘못된 정보입니다. 다시 입력하세요.";
		model.addAttribute("msg", message);
		return "logIn";
	}
	
	@RequestMapping(value = "/logOut", method = RequestMethod.GET)
	public String signOut(Locale locale, Model model,HttpSession session) throws Exception{
		session.removeAttribute("id");
		logger.info("login");
		return "redirect:/";
	}
	
	@RequestMapping(value = "/projects", method = RequestMethod.GET)
	public String projects() throws Exception{
		logger.info("login");
		return "projects";
	}
	
	@RequestMapping(value = "/about", method = RequestMethod.GET)
	public String about() throws Exception {
		logger.info("login");
		return "about";
	}
	
	@RequestMapping(value = "/skills", method = RequestMethod.GET)
	public String skill() throws Exception {
		logger.info("login");
		return "skills";
	}
	
	@RequestMapping(value = "/contact", method = RequestMethod.GET)
	public String contact(@RequestParam("page") String page,Model model) throws Exception {
		List<InfoVO> info;		
		info= infoService.readInfoList((Integer.parseInt(page)-1)*5);
		int len = infoService.countList();
		System.out.println(len);
		
		model.addAttribute("info",info);
		model.addAttribute("len",len);
		model.addAttribute("page",page);
		return "contact";
	}
}
