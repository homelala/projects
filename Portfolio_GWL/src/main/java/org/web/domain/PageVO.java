package org.web.domain;

public class PageVO {
	private int firstPage;
	private int lastPage;
	
	public int getFirstPage() {
		return firstPage;
	}
	public void setFirstPage(int firstPage) {
		this.firstPage = firstPage;
	}
	public int getLastPage() {
		return lastPage;
	}
	public void setLastPage(int lastPage) {
		this.lastPage = lastPage;
	}
	
	@Override
	public String toString() {
		return "PageVO [firstPage=" + firstPage + ", lastPage=" + lastPage + "]";
	}
	
	
}
