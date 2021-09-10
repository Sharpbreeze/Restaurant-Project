<script>
function myFunction() {
  const inpObj = document.getElementById("id1");
  if (!inpObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inpObj.validationMessage;
  } else {
    document.getElementById("demo").innerHTML = "Input OK";
  }
}
</script>

<script type="javascript">
    ... construction of ajaxy-link,  setting of "js-enabled" cookie flag, etc..
</script>
<noscript>
    <a href="next_page.php?nojs=1">Next Page</a>
</noscript>
    <noscript>
    <img src="no_js.gif" alt="Javascript not enabled" />
</noscript>"
     <noscript>
                <p style="font-weight:bold; text-align: center; padding-bottom: 50px;"><span style="color:red; font-size: 40px">JavaScript is disabled in your browser!</span></br>
                <span style="color:rgb(180, 8, 8); font-size: 20px">This site is best viewed with JavaScript enabled</span></p>
            </noscript>