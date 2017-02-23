for (var i = 1; i <= 5; i++)
{
  for (var j = 1; j <=5; j++)
  {
        if (i==1 || i==5)
        {
          document.write("*");
        }
        else if (j==1 || j==5)
        {
            document.write("*");
        }
        else
        {
            document.write("&nbsp");
        }
  }
    document.write("<br>")
}
