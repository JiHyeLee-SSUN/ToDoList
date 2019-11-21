package com.board.persistence;

import com.board.dao.BoardVO;

import java.util.List;

public interface BoardDAO {
    List<BoardVO> read() throws Exception;

    int createList(BoardVO boardVO) throws Exception;
}
