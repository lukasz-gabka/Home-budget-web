function customRangeVisibility()
{
	var dates = document.getElementsByClassName("dates");
	if (document.getElementById("rangeMenu").selectedIndex == 3)
	{
		document.getElementById("balanceRange").style.display="block";
		for (var i = 0; i < dates.length; i++)
		{
			dates[i].required = true;
		}
	}
	else
	{
		document.getElementById("balanceRange").style.display="none";
		for (var i = 0; i < dates.length; i++)
		{
			dates[i].required = false;
		}
	}
}
