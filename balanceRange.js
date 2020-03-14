function customRangeVisibility()
{
	if (document.getElementById("rangeMenu").selectedIndex == 3)
	{
		document.getElementById("balanceRange").style.display="block";
		document.getElementById("dateFirst").required = true;
		document.getElementById("dateLast").required = true;
		
	}
	else
	{
		document.getElementById("balanceRange").style.display="none";
		document.getElementById("dateFirst").required = false;
		document.getElementById("dateLast").required = false;
	}
}
