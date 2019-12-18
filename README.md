# TODO LIST
<br>
<hr>
<ul>
  <li>개요</li>
    <ul>
      <li>한글과컴퓨터의 pre-test 구현 과제</li>
      <li>요구사항을 기반으로 TODO LIST를 구현한다</li>
    </ul>
</ul>
<hr>

<b>< Requirements ></b>

<ul>
  <li>개요</li>
    <ul>
      <li>To Do List 에 내용을 추가, 삭제 가능하며 결과를 정렬해서 볼 수 있도록 웹페이지 구현</li>
  </ul>
</ul>

<ul>
  <li>Language</li>
    <ul>
      <li>클라이언트 개발 지원자는 JavaScript,HTML,CSS 필수사용 </li>
      <li>페이지 이동하지 말것(single-page application)</li>
      <li>서버 개발 지원자는 UI없이 요구사항을 필수 기능을 Restful API로 구현 가능</li>
    </ul>
</ul>

<ul>
  <li>필수기능</li>
    <ul>
      <li>항목 추가 / 삭제 </li>
      <li>정렬 시간순 / 항목순</li>
      <li>DB사용</li>
      <li>서버 클라이언트 데이타 전송이 필요한 경우 JSON형식 (선택 사항)</li>
    </ul>
</ul>

<hr>


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

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/uYFI19fpgtU/0.jpg)](https://www.youtube.com/watch?v=uYFI19fpgtU)

