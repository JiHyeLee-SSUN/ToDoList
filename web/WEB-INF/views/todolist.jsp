<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<html>
<head>
    <title>Todo List</title>
    <link rel="stylesheet" type="text/css" href="/resources/css/style.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet">
    <link rel="stylesheet" type="text/css"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="//code.jquery.com/jquery-3.4.1.min.js"></script>

</head>
<body>

<div id="container">

    <h1>To-Do List <i class="fa fa-clock-o" aria-hidden="true"></i> <i class="fa fa-plus" aria-hidden="true"></i></h1>
    <input id="write" type="text" placeholder="Add New Todo">

    <ul>
        <div id ="allList"></div>
    </ul>
</div>

<script type="text/javascript" src="/resources/js/todos.js"></script>
<script type="text/javascript" src="/resources/js/logic.js"></script>
</body>
</html>
