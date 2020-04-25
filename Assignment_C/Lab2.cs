//Callie Burrichter
//IT 483
//Assignment C - Lab2

using System;
using System.Text;
using System.Threading;
using System.Collections.Generic;

public class Lab2
{
    public Lab2()
    {
        string pResponse="0";
            string tResponse="0";
            double total=0.0;
            Console.WriteLine("What kind of glasses would you like:");
            while ((pResponse!="1") && (pResponse!="2"))
            {
                Console.WriteLine("1 -> prescription, 2 -> non-prescription");
                string pResponseIn=Console.ReadLine();
                pResponse=pResponseIn;
            }

            Console.WriteLine("\nWhat kind of coating would you like:");
            while ((tResponse!="1") && (tResponse!="2"))
            {
                Console.WriteLine("1 -> anti-glare, 2 -> brown tint");
                string tResponseIn=Console.ReadLine();
                tResponse=tResponseIn;
            }
            if (pResponse == "1")
             {
            total += 40;
             }
             if (pResponse == "2")
            {
            total += 25;
            }
             if (tResponse=="1")
            {
                total+=12.5;
            }
            if (tResponse=="2")
            {
                total+=9.99;
            }

            Console.WriteLine("Your total cost is "+total.ToString());
    }
}