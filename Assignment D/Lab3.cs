using System;
using System.Collections.Generic;
using System.Text;

public class Lab3
{
    public Lab3()
    {
		double curBal = 45.32;
		double amount = 0.00;

		Console.WriteLine("Please enter a amount to update account by $");
		try
		{
			amount = Convert.ToDouble(Console.ReadLine());
		}
		catch (FormatException e)
		{
			Console.WriteLine(e.StackTrace);
		}
		Console.WriteLine();
		Console.WriteLine("Customer's Balance (Before Transaction) = $" + curBal);
		Console.WriteLine("Requested Update Amount = $" + amount);

		double actAmount = transaction(curBal, amount);
		curBal += actAmount;

		Console.WriteLine();
		Console.WriteLine("Actual Update Amount = $" + actAmount);
		Console.WriteLine("Customer's Balance (After Transaction) = $" + curBal);

		Console.WriteLine("Thank you and good-bye!");
	}

	public static double transaction(double balance, double amount)
	{
		if (amount > 0)
		{
			return 1;
		}
		if (amount < 0)
		{
			if ((balance - amount) < balance)
			{
				return 0.00;
			}
			else
				return amount;
		}
		return 0.00;
	}
}
