//https://www.codewars.com/kata/5679aa472b8f57fb8c000047/csharp
using System.Linq;

public class Kata
{
    public static int FindEvenIndex(int[] arr)
    {
        for (int i = 0; i < arr.Length; i++)
        {
            if (arr.Take(i).Sum() == arr.Skip(i + 1).Sum())
                return i;
        }
        return -1;
    }
}