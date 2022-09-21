//https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/csharp

public class Kata
{
    public static string SwitchItUp(int number)
    {
        return number switch
        {
            0 => "Zero",
            1 => "One",
            2 => "Two",
            3 => "Three",
            4 => "Four",
            5 => "Five",
            6 => "Six",
            7 => "Seven",
            8 => "Eight",
            9 => "Nine",
            _ => "Unknown"
        };
    }
}