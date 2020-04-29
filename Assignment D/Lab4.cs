using System;
using System.Collections.Generic;
using System.Text;

public class Lab4
{

    public Lab4()
    {
        int a = 1, b = 3, c = 5;
        double x = 2.2, y = 4.4, z = 6.6, ans;
        ans=average(a, b);

        Console.WriteLine("\naverage(a, b) = " + ans);

        ans=average(a, b, c);

         Console.WriteLine("\naverage(a, b, c) = " + ans);

        ans=average(x, y);
        Console.WriteLine("\naverage(x, y) = " + ans);

        ans=average(x, y, z);
        Console.WriteLine("\naverage(x, y, z) = " + ans);
    }

    double average(int n1, int n2)
    {
        return (n1 + n2) / 2.0;
    }

    double average(int n1, int n2, int n3)
    {
        return (n1 + n2 + n3) / 3.0;
    }

    double average(double n1, double n2)
    {
        return (n1 + n2) / 2.0;
    }

    double average(double n1, double n2, double n3)
    {
        return (n1 + n2 + n3) / 3.0;
    }
}
