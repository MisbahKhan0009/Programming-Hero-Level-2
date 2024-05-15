{
  //conditiona type
  type A1 = null;
  type A2 = undefined;

  type x = A1 extends null ? true : false;
  type y = A1 extends null ? true : A2 extends undefined ? undefined : any;
}
