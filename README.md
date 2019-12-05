# TODO LIST
<br>

<b>< Used Language, Library ></b>

<ul>
  <li>Used Language</li>
    <ul>
      <li>Java</li>
      <li>JSP</li>
      <li>HTML, CSS</li>
      <li>Java Script</li>
    </ul>
</ul>
<ul>
  <li>Used Open Source Library</li>
    <ul>
      <li>Bootstrap(HTML, CSS)</li>
      <li>jQuery(JavaScript)</li>
      <li>Jackson(JSON)</li>
    </ul>
</ul>

<hr>

<b>< Tool Kit ></b>

<ul>
    <li>Intellij IDEA 2019.02, JDK 1.8.0</li>
    <li>Spring 4.3.18.RELEASE</li>
    <li>Apache-Tomcat 8.5(WAS)</li>
    <li>Mysql(DB)</li>
    <li>Github</li>
</ul>

<hr>

<b>< Mysql DB 구축 ></b>

<p><b> - database</b><p>

<p><b> - tbl_board</b><p>

CREATE TABLE tbl_board (
   tno INT(11) NOT NULL AUTO_INCREMENT
 , content VARCHAR(50) NOT NULL
 , regdate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP()
 , PRIMARY KEY (tno) 
 );
<hr>


<b>< Function ></b>

<ol>
  <ul>
    <ol>
      <b><li>기본 기능</li></b>
        <ul>
          <li>
            단일웹페이지(Single web application)로 구성해 페이지가 바뀌는게 아닌 ajax통신으로 부분 랜더링을 실행한다.
          </li>
          <li>Rest API로 구성해 http method에 따라서 수행이 달라진다.</li>
          <li>항목 추가/삭제 ,시간순 정렬 기능으로 구성</li>
          <li>서버 클라이언트 데이터 전송을 json 형식으로 전달</li>
        </ul>
    </ol>   
  </ul>

</ol>
