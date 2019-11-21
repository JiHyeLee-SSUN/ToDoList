
package com.board.dao;

import java.util.Date;

public class BoardVO {
    private int tno;
    private String content;
    private String regdate;

    public int getTno() {
        return tno;
    }

    public void setTno(int tno) {
        this.tno = tno;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getRegdate() {
        return regdate;
    }
}
