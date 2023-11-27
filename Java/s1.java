class s1
{
public static void main(String s[])

{
ABC obj1 = ABC.getInstance();
ABC obj2 = ABC.getInstance();
}
}
class ABC
{
static ABC obj = new ABC();
String name = "abcdf";
private ABC() {}

public static ABC getInstance()
{

return obj;

}
}
