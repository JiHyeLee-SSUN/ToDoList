
package com.board.service;

import com.board.dao.BoardVO;
import com.board.persistence.BoardDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardServiceImpl implements BoardService {
    @Autowired
    private BoardDAO bDAO;

    @Override
    public List<BoardVO> readAsc() throws Exception {
        return bDAO.readAsc();
    }

    @Override
    public List<BoardVO> readDesc() throws Exception {
        return bDAO.readDesc();
    }

    @Override
    public int createList(BoardVO boardVO) throws Exception {
        return bDAO.createList(boardVO);
    }

    @Override
    public int deleteList(BoardVO boardVO) throws Exception {
        return bDAO.deleteList(boardVO);
    }
}
