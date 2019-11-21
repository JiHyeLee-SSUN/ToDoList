
package com.board.persistence;

import com.board.dao.BoardVO;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BoardDAOImpl implements BoardDAO {

    private static final String NAMESPACE ="com.board.mapper.boardMapper";

    @Autowired
    private SqlSession sqlSession;

    @Override
    public List<BoardVO> read() throws Exception {
        return sqlSession.selectList(NAMESPACE+".read");
    }

    @Override
    public int createList(BoardVO boardVO) throws Exception {
        return sqlSession.insert(NAMESPACE+".create", boardVO);
    }
}
