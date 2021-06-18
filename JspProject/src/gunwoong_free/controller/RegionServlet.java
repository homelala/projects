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
 * Servlet implementation class RegionServlet
 */
@WebServlet("/RegionServlet")
public class RegionServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public RegionServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html; charset=UTF-8");
		String message="";
		String cmdReq="";
		cmdReq=request.getParameter("cmd");
		HttpSession session = request.getSession();
		if(cmdReq.contentEquals("read")) {
			RegionVO vo = new RegionVO();
			ArrayList<RegionVO> regionvo = new ArrayList<RegionVO>();
			RegionDAO region = new RegionDAO();
			String loc=request.getParameter("loc");
			if(loc.equals("1")) loc="서울";
			else if(loc.equals("2")) loc="경기도";
			else if(loc.equals("3")) loc="강원도";
			else if(loc.equals("4")) loc="전라도";
			else if(loc.equals("5")) loc="경상도";
			else if(loc.equals("6")) loc="제주도";
			regionvo = region.read(loc);
			request.setAttribute("name", loc);
			request.setAttribute("region", regionvo);
			RequestDispatcher view = request.getRequestDispatcher("board.jsp");
			view.forward(request,response);
		}else if(cmdReq.contentEquals("register")) {
			RequestDispatcher view = request.getRequestDispatcher("registerBoard.jsp");
			view.forward(request,response);
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html; charset=UTF-8");
		
		String message="";
		String cmdReq="";
		cmdReq=request.getParameter("cmd");
		HttpSession session = request.getSession();
		
		if(cmdReq.contentEquals("register")) {
			RegionVO region = new RegionVO();
			MemberVO member = (MemberVO)session.getAttribute("loginInfo");
			String id=member.getUsername();
			region.setTitle(request.getParameter("title"));
			region.setName(request.getParameter("category"));
			region.setExplain(request.getParameter("explain"));
			region.setLocation(request.getParameter("location"));
			region.setUsername(id);
			region.setVote(0);
			RegionDAO dao = new RegionDAO();
			if(dao.insert(region)) message = "등록이 완료되었습니다.";
			else message = "등록이 실패하였습니다.";
			request.setAttribute("message", message);
			RequestDispatcher view = request.getRequestDispatcher("index.jsp");
			view.forward(request,response);
		}
	}

}
