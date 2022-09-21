//https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/csharp

using System;

public static class Kata
{
    public static int DescendingOrder(int num)
    {
        // var str = num.ToString();
        // var arr = str.ToCharArray();
        // Array.Sort(arr);
        // Array.Reverse(arr);
        // return int.Parse(new string(arr));

        return int.Parse(string.Concat(num.ToString().OrderByDescending(x => x)));

    }
}
