
export const validationMessage =
{

  email:[
    {type:'required',message:'Email is required'},
    {type:'pattern',message:'Enter a valid email'},
    {type:'maxlength',message:'The maxlength of 40 characters is reached'}

  ],
  password:[
    {type:'required',message:'Password is required'},
    {type:'pattern',message:'Password between 8 to 16 character like (Har:123)'}
  ],

}
