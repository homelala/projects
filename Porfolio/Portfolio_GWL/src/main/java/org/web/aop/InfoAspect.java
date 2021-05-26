package org.web.aop;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.Signature;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;
import org.web.domain.InfoVO;

@Aspect
@Component
public class InfoAspect {
	 @Before("execution(* updateMark(int))")
	   public void beforeMethod(JoinPoint jp) {
	        System.out.println("[BeforeMethod] : 메소드 호출 전");
	        Signature sig = jp.getSignature();
	        System.out.println(" 메소드 이름:" + sig.getName());
	        Object[] obj = jp.getArgs();
	        System.out.println(" 인수 값:" + obj[0]);
	   }
	    @After("execution(* updateMark(int))")
	    public void afterMethod() {
	        System.out.println("[AfterMethod] : 메소드 호출 후");
	    }
	    @AfterReturning(value = "execution(* updateMark(int))", returning = "info")
	    public void afterReturningMethod(JoinPoint jp, InfoVO info) {
	    	System.out.println("[afterReturningMethod] : 메소드 호출 후");
	        Signature sig = jp.getSignature();
	        System.out.println(" 메소드 이름:" + sig.getName());
	        Object[] obj = jp.getArgs();
	        System.out.println(" 인수 값:" + obj[0]);	
	    }

	    @Around("execution(* updateMark(int))")
	    public InfoVO aroundMethod(ProceedingJoinPoint pjp) throws Throwable {
	        System.out.println("[AroundMethod Before] : 메소드 호출 전");
	        Signature sig = pjp.getSignature();
	        System.out.println(" 메소드 이름:" + sig.getName());
	        InfoVO info = (InfoVO) pjp.proceed();
	        System.out.println("[AroundMethod after] : 메소드 호출 후");
	        System.out.println(" 메소드 이름:" + sig.getName());
	        return info;
	    }
	    @AfterThrowing(value = "execution(* updateMark(int))", throwing = "ex")
	    public void afterThrowingMethod(Throwable ex) {
	        // 메소드 호출이 예외를 내보냈을 때 호출되는 Advice
	        System.out.println("[AfterThrowingMethod] : 예외 발생 후");
	        System.out.println("exception value = " + ex.toString());
	    }
}
