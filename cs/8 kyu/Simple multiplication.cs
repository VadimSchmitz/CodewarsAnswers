//https://www.codewars.com/kata/583710ccaa6717322c000105/train/csharp
public class Multiplier
{
    public static int Multiply(int x)
    {
        return x * (x % 2 == 0 ? 8 : 9);
    }
}