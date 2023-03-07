
export const validationMessage =
{
  required:"This field is required",
  email:[
    {type:'required',message:'Email is required'},
    {type:'pattern',message:'Enter a valid email'},
    {type:'maxlength',message:'The maxlength of 40 characters is reached'}

  ],
  password:[
    {type:'required',message:'Password is required'},
    {type:'pattern',message:'Password between 8 to 16 character like (Har:123)'}
  ],
  firstName:[
    {type:'required',message:'First Name field is required'},
    {type:'pattern',message:'Only alphabets are allowed'}
  ],
  lastName:[
    {type:'required',message:'Last Name field is required'},
    {type:'pattern',message:'Only alphabets are allowed'}
  ],
  dob:[
    {type:'required',message:'DOB field is required'},
  ],
  gender:[
    {type:'required',message:'Gender field is required'},
  ],
  maritalStatus:[
    {type:'required',message:'Marital Status field is required'},
  ],
  contact:[
    {type:'required',message:'Contact field is required'},
    {type:'pattern',message:'Phone number must be atleast 10 numbers'},
  ],
  total_year:[
    {type:'required',message:'Year field is required'},
  ],
  total_month:[
    {type:'required',message:'Month field is required'},
  ],
  address:[
    {type:'required',message:'Address field is required'},
  ],
  school:[
    {type:'required',message:'School/University field is required'},
  ],
  educationLevel:[
    {type:'required',message:'Education Level field is required'},
  ],
  fromTime:[
    {type:'required',message:'From Time field is required'},
  ],
  toTime:[
    {type:'required',message:'To Time field is required'},
  ],
  language:[
    {type:'required',message:'Language field is required'},
  ],
  professionalCourses:[
    {type:'required',message:'Professional Course field is required'},
  ],
  description:[
    {type:'required',message:'Description field is required'},
  ],
  oldPassword:[
    {type:'required',message:'Old Password Field is required'},
    {type:'pattern',message:'Password between 8 to 16 character like (Har:123)'}
  ],
  newPassword:[
    {type:'required',message:'New Password Field is required'},
    {type:'pattern',message:'Password between 8 to 16 character like (Har:123)'}
  ],
  confirmPassword:[
    {type:'required',message:'Confirm Password Field is required'},
    {type:'pattern',message:'Password between 8 to 16 character like (Har:123)'},
    {type:'confirmedValidator',message:`Passsword and Confirm Password didn't match.`},
  ],
  title:[
    {type:'required',message:'Title field is required'},
  ],
  goalTraining:[
    {type:'required',message:'Objective/goal rating is required'}
  ],
  missingDescription:[
    {type:'required',message:'"What is missing" field is required'},
    {type:'maxlength',message:'"What is missing" textbox requires atleast 25 characters'}

  ],
  relevantFeedback:[
    {type:'required',message:'Relevant rating is required'}
  ],
  overallFeedback:[
    {type:'required',message:'Overall rating is required'}
  ],
  satisfiedWithContent:[
    {type:'required',message:'Satisfied rating is required'}
  ],
  overallTrainingDescription:[
    {type:'required',message:'Overall feeback field is required'}
  ],
  briefReason:[
    {type:'required',message:'Brief Reason field is required'},
    {type:'minlength',message:'Reason requires atleast 25 characters'}
  ],

}
