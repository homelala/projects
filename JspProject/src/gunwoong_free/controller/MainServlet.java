package gunwoong_free.controller;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import gunwoong_free.domain.MemberVO;
import gunwoong_free.domain.RegionVO;
import gunwoong_free.persistance.MemberDAO;
import gunwoong_free.persistance.RegionDAO;

/**
 * Servlet implementation class MainServlet
 */
@WebServlet("/MainServlet")
public class MainServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MainServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String message="";
		String cmdReq="";
		cmdReq=request.getParameter("cmd");
		HttpSession session = request.getSession();	
		if(cmdReq.contentEquals("join")) {
			RequestDispatcher view = request.getRequestDispatcher("register.jsp");
			view.forward(request,response);
		}else if(cmdReq.contentEquals("log")) {
			RequestDispatcher view = request.getRequestDispatcher("Login.jsp");
			view.forward(request,response);
		}else if(cmdReq.contentEquals("logout")) {
			session.invalidate();
			RequestDispatcher view = request.getRequestDispatcher("index.jsp");
			message="로그아웃 되었습니다!";
			request.setAttribute("message", message);
			view.forward(request,response);
		}else if(cmdReq.contentEquals("update")) {
			MemberDAO memberDAO =new MemberDAO();
			MemberVO vo=(MemberVO)session.getAttribute("loginInfo");
			RegionDAO dao = new RegionDAO();
			vo = memberDAO.read(vo.getId());
			ArrayList<RegionVO> favor = new ArrayList<RegionVO>();
			favor = dao.favor(vo.getFavor());
			request.setAttribute("favor", favor);
			request.setAttribute("info", vo);
			RequestDispatcher view = request.getRequestDispatcher("updateInfo.jsp");
			view.forward(request,response);
		}else if(cmdReq.contentEquals("info")) {
			MemberDAO memberDAO =new MemberDAO();
			RegionDAO dao = new RegionDAO();
			MemberVO vo=(MemberVO)session.getAttribute("loginInfo");
			vo = memberDAO.read(vo.getId());
			ArrayList<RegionVO> favor = new ArrayList<RegionVO>();
			
			favor = dao.favor(vo.getFavor());
			request.setAttribute("favor", favor);
			request.setAttribute("info", vo);
			RequestDispatcher view = request.getRequestDispatcher("inform.jsp");
			view.forward(request,response);
		}else if(cmdReq.contentEquals("delete")) {
			MemberDAO memberDAO =new MemberDAO();
			MemberVO vo=(MemberVO)session.getAttribute("loginInfo");
			if(memberDAO.delete(vo.getId())){
				message="회원 탈퇴가 완료되었습니다.";
			}else {
				message="회원 탈퇴가 실패되었습니다.!";
			}
			session.invalidate();
			RequestDispatcher view = request.getRequestDispatcher("index.jsp");
			view.forward(request,response);
		}else if(cmdReq.contentEquals("list")) {
			ArrayList<RegionVO> list = new ArrayList<RegionVO>();
			RegionDAO dao = new RegionDAO();
			MemberDAO memberDAO =new MemberDAO();
			MemberVO vo=(MemberVO)session.getAttribute("loginInfo");
			vo = memberDAO.read(vo.getId());
			ArrayList<RegionVO> favor = new ArrayList<RegionVO>();
			
			favor = dao.favor(vo.getFavor());
			request.setAttribute("favor", favor);
			list= dao.readList(vo.getUsername());
			request.setAttribute("list",list);
			request.setAttribute("info", vo);
			RequestDispatcher view = request.getRequestDispatcher("List.jsp");
			view.forward(request,response);
		}else if(cmdReq.contentEquals("vote")) {
			RegionVO vo = new RegionVO();
			RegionDAO dao = new RegionDAO();
			String id = request.getParameter("id");
			int beforeVote=dao.getVote(id);
			if(dao.updateVote(id,beforeVote)) {
				message="투표가 완료되었습니다.";
			}else {
				message="투표가 실패했습니다. 다시 시도하세요.";
			}
			request.setAttribute("message", message);
			RequestDispatcher view = request.getRequestDispatcher("index.jsp");
			view.forward(request,response);
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html; charset=UTF-8");
		
		String cmdReq="";
		String message;
		cmdReq=request.getParameter("cmd");
		HttpSession session = request.getSession();
		if(cmdReq.contentEquals("join")) {
			MemberVO memberVO = new MemberVO();
			
			memberVO.setId(request.getParameter("id"));
			memberVO.setPasswd(request.getParameter("passwd"));
			memberVO.setUsername(request.getParameter("username"));
			memberVO.setFavor(request.getParameter("favor"));
			memberVO.setMobile(request.getParameter("mobile"));
			memberVO.setEmail(request.getParameter("email"));
			
			MemberDAO memberDAO =new MemberDAO();
			if(memberDAO.add(memberVO)) message = "가입을 축하합니다";
			else message = "가입 실패입니다";
			request.setAttribute("message", message);
			request.setAttribute("member", memberVO);
			memberDAO.join(memberVO);
			session.invalidate();
			RequestDispatcher view = request.getRequestDispatcher("index.jsp");
			view.forward(request,response);
		}else if(cmdReq.contentEquals("Log")) {
			String id=request.getParameter("id");
			String passwd=request.getParameter("passwd");
			
			MemberDAO memberDAO =new MemberDAO();
			if(memberDAO.checkId(id,passwd)==-1) {
				message="아이디가 존재 하지 않습니다.";
				request.setAttribute("message",message);
				RequestDispatcher view = request.getRequestDispatcher("Login.jsp");
				view.forward(request,response);
			}
			else if(memberDAO.checkId(id,passwd)==0) {
				message="비밀 번호가 틀렸습니다.";
				request.setAttribute("message",message);
				RequestDispatcher view = request.getRequestDispatcher("Login.jsp");
				view.forward(request,response);
			}else if(memberDAO.checkId(id,passwd)==1){
				message="로그인이 성공하셨습니다.";
				request.setAttribute("message",message);
				MemberVO vo = new MemberVO();
				vo=memberDAO.read(id);
				session.setAttribute("loginInfo",vo);
				RequestDispatcher view = request.getRequestDispatcher("index.jsp");
				view.forward(request,response);
			}
		}else if(cmdReq.contentEquals("update")) {
			MemberVO memberVO = new MemberVO();
			String MainId = request.getParameter("MainId");
			memberVO.setId(request.getParameter("id"));
			memberVO.setPasswd(request.getParameter("passwd"));
			memberVO.setUsername(request.getParameter("username"));
			memberVO.setFavor(request.getParameter("favor"));
			memberVO.setMobile(request.getParameter("mobile"));
			memberVO.setEmail(request.getParameter("email"));
			
			MemberDAO memberDAO =new MemberDAO();
			if(memberDAO.update(memberVO, MainId)) message = "수정이 완료되었습니다.";
			else message = "수정이 실패했습니다.";
			request.setAttribute("message", message);
			request.setAttribute("info", memberVO);
			memberDAO.join(memberVO);
			RequestDispatcher view = request.getRequestDispatcher("inform.jsp");
			view.forward(request,response);
		}else if(cmdReq.contentEquals("delete")) {
			MemberDAO memberDAO =new MemberDAO();
			MemberVO vo=(MemberVO)session.getAttribute("loginInfo");
			if(memberDAO.delete(vo.getId())){
				message="회원 탈퇴가 완료되었습니다.";
				session.invalidate();
			}else {
				message="회원 탈퇴가 실패되었습니다.!";
			}
			RequestDispatcher view = request.getRequestDispatcher("index.jsp");
			view.forward(request,response);
		}
		
	}

}
