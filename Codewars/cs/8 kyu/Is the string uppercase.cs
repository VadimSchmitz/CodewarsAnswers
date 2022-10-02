//https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/csharp
using System.Linq;

public static class StringExtensions
{
    public static bool IsUpperCase(this string text)
    {
        //linq
        return !s.Any(x => Char.IsLower(x));

        //vanilla
        return value.ToUpper() == value;
    }
}