//GENERATE STARS MAX IS 5 IF IS LESS THAN RATING MEANS 1.2.3.4 CASE IF LOOP AND PRINT 4 STARTS 
function generateStars(rating: number): string {
    const maxRating = 5;
    let stars = '';
  
    // Loop through and generate filled stars
    for (let i = 1; i <= maxRating; i++) {
      if (i <= rating) {
        stars += `<span class="star filled">★</span>`;
      } else {
        stars += `<span class="star">★</span>`;
      }
    }
  
    return stars;
}

//NOW GENERATE RESUME BASED ON USERS INPUT
function generateResume(event: Event): void {
    event.preventDefault(); // Prevent form submission

    //RETRIVE VALUES FROM FORM base on IDS 

    const fullname = (document.getElementById('fullname') as HTMLInputElement).value;
    const job_desc = (document.getElementById('job_desc') as HTMLInputElement).value;
    const inputElement = document.getElementById('picture') as HTMLInputElement;
    const picture = inputElement?.files?.[0];
    let pictureURL='';
    if (picture) {
        pictureURL = URL.createObjectURL(picture);
    }
    const profile_description = (document.getElementById('profile_description') as HTMLTextAreaElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const phonenumber = (document.getElementById('phonenumber') as HTMLInputElement).value;
    const website = (document.getElementById('website') as HTMLInputElement).value;
    const skill1 = (document.getElementById('skill1')as HTMLInputElement).value;
    const rating1 = (document.getElementById('rating1')as HTMLInputElement).value;
    const skill2 = (document.getElementById('skill2')as HTMLInputElement).value;
    const rating2 = (document.getElementById('rating2')as HTMLInputElement).value;
    const skill3 = (document.getElementById('skill3')as HTMLInputElement).value;
    const rating3 = (document.getElementById('rating3')as HTMLInputElement).value;
    const In1 = (document.getElementById('in1')as HTMLInputElement).value;
    const Year1 = (document.getElementById('y1') as HTMLInputElement).value;
    const degree1 = (document.getElementById('d1') as HTMLInputElement).value;
    const In2 = (document.getElementById('in2')as HTMLInputElement).value;
    const Year2 = (document.getElementById('y2') as HTMLInputElement).value;
    const degree2 = (document.getElementById('d2') as HTMLInputElement).value;
    const In3 = (document.getElementById('in3')as HTMLInputElement).value;
    const Year3 = (document.getElementById('y3') as HTMLInputElement).value;
    const degree3 = (document.getElementById('d3') as HTMLInputElement).value;
    const j1 = (document.getElementById('j1')as HTMLInputElement).value;
    const l1= (document.getElementById('l1') as HTMLInputElement).value;
    const d1 = (document.getElementById('d1') as HTMLTextAreaElement).value;
    const desc1 = (document.getElementById('desc1') as HTMLTextAreaElement).value;
    const j2 = (document.getElementById('j2')as HTMLInputElement).value;
    const l2= (document.getElementById('l2') as HTMLInputElement).value;
    const d2 = (document.getElementById('d2') as HTMLInputElement).value;
    const desc2 = (document.getElementById('desc2') as HTMLTextAreaElement).value;
    const j3 = (document.getElementById('j3')as HTMLInputElement).value;
    const l3= (document.getElementById('l3') as HTMLInputElement).value;
    const d3 = (document.getElementById('d3') as HTMLInputElement).value;
    const desc3 = (document.getElementById('desc3') as HTMLTextAreaElement).value;
    
    const stars = generateStars(parseInt(rating1));
    const stars2 = generateStars(parseInt(rating2));
    const stars3 = generateStars(parseInt(rating3));
    // Create the resume string using template literals
    const generatedResume = `
    <div class="container">
    <div class="inside_container">
        <div class="left_side">
            <div class="profile_img">
                <img src=${pictureURL} width="200" height="200" />
            </div>
            <div class="My_profile">
                <div class="icon">
                    <img src="user.png" width="20px" height="20px"/>
                </div>
                <div class="heading">
                    <h1 style="font-size: 30px;">My Profile</h1>
                </div>
            </div>
            <div class="para">
                <p>${profile_description}</p>
            </div>
            <div id="skill">
                <center><div class="personal_skill">
                    <h1 style="color: white;font-weight: bold;">Personal SKill</h1>    
                </div></center>
                <div class="rating_skill">
                    <div class="name_skill">
                        <div class="name">
                            <p style="color: black;">${skill1}</p>
                        </div>
                        <div class="rating_div">
                        <div class="rating_container">
                            <p>${stars}</p>
                        </div>
                        </div>
                    </div>
                    <div class="name_skill">
                        <div class="name">
                            <p style="color: black;">${skill2}</p>
                        </div>
                        <div class="rating_div">
                        <div class="rating_container">
                            <p>${stars2}</p>
                        </div>
                        </div>
                    </div>
                   
                    <div class="name_skill">
                        <div class="name">
                            <p style="color: black;">${skill3}</p>
                        </div>
                        <div class="rating_div">
                        <div class="rating_container">
                            <p>${stars3}</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div> 
           <ul>
                <li>
                <div class="contact">  
                <div class="contact_icon">
                    <i class="fas fa-phone" style="padding: 10px;color: hotpink;"></i> <!-- Home icon from Font Awesome -->
                </div>
                <div class="details" style="padding: 10px;" >
                    ${phonenumber}
                </div>
                </div>
            </li>
            <li>
            <div class="contact">
                <div class="contact_icon">
                    <i class="fas fa-envelope" style="padding: 10px;color: hotpink;"></i> <!-- Home icon from Font Awesome -->
                </div>
                <div class="details" style="padding: 10px;" >
                    ${email}
            </div>
            </div>
            </li>
            <li>
                <div class="contact">
                <div class="contact_icon">
                    <i class="fas fa-globe" style="padding: 10px;color: hotpink;"></i> <!-- Home icon from Font Awesome -->
                </div>
                <div class="details"  style="padding: 10px;">
                    ${website}
                </div>
                </div>
            </li>
            <li>
            <div class="contact">
            <div class="contact_icon">
                <i class="fas fa-home" style="padding: 10px;color: hotpink;"></i> 
                </div>
                <div class="details" style="padding: 10px;">
                ${address}
                </div>
            </div>
            </li>
            </ul>
            </div>                   
        <div class="right_side">
            <div style="font-size: 60px;color: black;">${fullname}</div>
            <div class="job_desc">
                <h2 style="color: white;">${job_desc}</h2>
            </div>
            <div class="education">
                <div class="heading1" style="padding: 20px;">
                    <div class="contact">
                        <div style="flex: 20%;"> 
                            <div class="star">
                                *
                                </div>
                        </div>
                    <div class="details">
                        <h3>${In1}</h3>
                        <h4>${degree1}</h4>
                        <p>${Year1}</p>
                    </div> 
                    </div>
                    <div class="contact">
                        <div style="flex: 20%;"> 
                            <div class="star">
                                *
                                </div>
                        </div>
                        <div class="details">
                            <h3>${In2}</h3>
                            <h4>${degree2}</h4>
                            <p>${Year2}</p>
                        </div> 
                        </div>

                    <div class="contact">
                    <div style="flex: 20%;"> 
                        <div class="star">
                            *
                            </div>
                    </div>
                    <div class="details">
                        <h3>${In3}</h3>
                        <h4>${degree3}</h4>
                        <p>${Year3}</p>
                    </div> 
                    </div>
                </div>
                <div class="data">Education</div>
            </div>
         <div class="education">
            <div class="heading1" style="padding: 20px;">
                <div class="contact">
                    <div style="flex: 20%;"> 
                        <div class="star">
                            *
                            </div>
                    </div>
                <div class="details">
                    <h3>${j1}</h3>
                    <h4><span>${d1}</span>---<span>${l1}</span></h4>
                    <h5>${desc1}</h5>
                </div> 
                </div>
                <div class="contact">
                    <div style="flex: 20%;"> 
                        <div class="star">
                            *
                            </div>
                    </div>
                <div class="details">
                    <h3>${j2}</h3>
                    <h4><span>${d2}</span>---<span>${l2}</span></h4>
                    <h5>${desc2}</h5>
                </div> 
                </div>
                <div class="contact">
                    <div style="flex: 20%;"> 
                        <div class="star">
                            *
                            </div>
                    </div>
                <div class="details">
                    <h3>${j3}</h3>
                    <h4><span>${d3}</span>---<span>${l3}</span></h4>
                    <h5>${desc3}</h5>
                </div> 
                </div>
            </div>
            <div class="data1">Work Experience</div>
        </div>
        </div>
     </div>  
    </div>

    `;
  
    // Display the generated resume in the 'generatedResume' div
    const resumeDiv = document.getElementById('generatedResume') as HTMLDivElement;
    resumeDiv.innerHTML = generatedResume; // Set the resume HTML
    const editCV = document.querySelector('#edit') as HTMLButtonElement | null;
    if (editCV) {
        editCV.style.display = 'block';
    }
 }
 function edit() {
    const Form = document.getElementById('cv-form') as HTMLFormElement;
    Form.scrollIntoView({ behavior: 'smooth' });
}
  //CALL A FUNCTION BASED ON SUBMIT BUTTON IF CLICK THEN GENERATE FUNCTION IS CALL
  const submitButton = document.getElementById('submitBtn') as HTMLButtonElement;
  submitButton.addEventListener('click', generateResume);
  