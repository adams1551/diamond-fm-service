<template>
  <div>
        
      <form @submit="UpdateProfile">
          <div class="mdc-layout-grid">
            <div class="mdc-layout-grid__inner">
              <div class="mdc-layout-grid__cell--span-12">
                <div class="mdc-card">
                  <h6 class="card-title">Profile</h6>
                  <div class="template-demo">
                    <div class="mdc-layout-grid__inner">
                      <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6-desktop">
                        <div class="mdc-text-field">
                          <input class="mdc-text-field__input" id="text-field-hero-input" v-model="FName">
                          <div class="mdc-line-ripple"></div>
                          <label for="text-field-hero-input" class="mdc-floating-label" >First Name</label>
                        </div>
                      </div>
                      <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6-desktop">
                        <div class="mdc-text-field mdc-text-field--outlined">
                          <input class="mdc-text-field__input" id="text-field-hero-input" v-model="LName">
                          <div class="mdc-notched-outline">
                            <div class="mdc-notched-outline__leading"></div>
                            <div class="mdc-notched-outline__notch">
                              <label for="text-field-hero-input" class="mdc-floating-label" >Last Name</label>
                            </div>
                            <div class="mdc-notched-outline__trailing"></div>
                          </div>
                        </div>
                      </div>
                      <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6-desktop">
                        <div class="mdc-text-field mdc-text-field--outlined mdc-text-field--with-leading-icon">
                          <i class="material-icons mdc-text-field__icon">favorite</i>
                          <input class="mdc-text-field__input" id="text-field-hero-input" v-model="PNumber">
                          <div class="mdc-notched-outline">
                            <div class="mdc-notched-outline__leading"></div>
                            <div class="mdc-notched-outline__notch">
                              <label for="text-field-hero-input" class="mdc-floating-label" >Phone Number</label>
                            </div>
                            <div class="mdc-notched-outline__trailing"></div>
                          </div>
                        </div>
                      </div>
                      <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6-desktop">
                        <div class="mdc-text-field mdc-text-field--outlined mdc-text-field--with-leading-icon">
                          <i class="material-icons mdc-text-field__icon">favorite</i>
                          <input class="mdc-text-field__input" id="text-field-hero-input" v-model="Address">
                          <div class="mdc-notched-outline">
                            <div class="mdc-notched-outline__leading"></div>
                            <div class="mdc-notched-outline__notch">
                              <label for="text-field-hero-input" class="mdc-floating-label" >Address</label>
                            </div>
                            <div class="mdc-notched-outline__trailing"></div>
                          </div>
                        </div>
                      </div>
                      <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6-desktop">
                        <div class="mdc-text-field mdc-text-field--outlined mdc-text-field--with-leading-icon">
                          <i class="material-icons mdc-text-field__icon">favorite</i>
                          <input class="mdc-text-field__input" id="text-field-hero-input" v-model="Email">
                          <div class="mdc-notched-outline">
                            <div class="mdc-notched-outline__leading"></div>
                            <div class="mdc-notched-outline__notch">
                              <label for="text-field-hero-input" class="mdc-floating-label" >Email</label>
                            </div>
                            <div class="mdc-notched-outline__trailing"></div>
                          </div>
                        </div>
                      </div>
                      <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6-desktop">
                        <div class="mdc-text-field mdc-text-field--outlined mdc-text-field--with-trailing-icon">
                          <i class="material-icons mdc-text-field__icon">visibility</i>
                          <input class="mdc-text-field__input" id="text-field-hero-input" v-model="Username">
                          <div class="mdc-notched-outline">
                            <div class="mdc-notched-outline__leading"></div>
                            <div class="mdc-notched-outline__notch">
                              <label for="text-field-hero-input" class="mdc-floating-label" >Username</label>
                            </div>
                            <div class="mdc-notched-outline__trailing"></div>
                          </div>
                        </div>
                      </div>
                       <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6-desktop">
                        <div class="mdc-text-field mdc-text-field--outlined mdc-text-field--with-leading-icon">
                          <i class="material-icons mdc-text-field__icon">favorite</i>
                          <input class="mdc-text-field__input" id="text-field-hero-input" v-model="PNumber">
                          <div class="mdc-notched-outline">
                            <div class="mdc-notched-outline__leading"></div>
                            <div class="mdc-notched-outline__notch">
                              <label for="text-field-hero-input" class="mdc-floating-label" >Phone Number</label>
                            </div>
                            <div class="mdc-notched-outline__trailing"></div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <select v-model="Nationality" class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6-desktop" id="nationality">
                            <option value="Nigeria">Nigeria</option>
                            <option value="USA">USA</option>
                            <option value="Australia">Australia</option>
                            <option value="Canada">Canada</option>
                            <option value="UAE">UAE</option>
                            <option value="Egypt">Egypt</option>
                            <option value="Lybia">Lybia</option>
                            <option value="Dubai">Dubai</option>
                        </select>
                      </div>
                      <div>
                        
                          <input type="file" name="" id="" v-bind="Image" class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-8">
                      </div>
                    </div>
             <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-8">
                            
                 <input class="mdc-button mdc-button--raised w-100" type="submit" value="Update Profile">
             </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </form>
  </div>
</template>

<script>
import AuthService from '../../service/auth'
import UserService from '../../service/user'
export default {
    data(){
        return {
            FName: '',
            LName: '',
            PNumber: '',
            Address: '',
            Email: '',
            Username: '',
            Image: '',
            Nationality: 'Nigeria'
        }
    },
    methods:{
        UpdateProfile($event){
            $event.preventDefault();
            AuthService.updateProfile({
                firstName: this.FName,
                lastName: this.LName,
                phoneNo: this.PNumber,
                address: this.Address,
                username: this.Username,
                image: this.Image,
                nationality: this.Nationality,
                email: this.Email
                
            }).then(res =>{
                this.FName = ''
                this.LName = ''
                this.PNumber= ''
                this.Address = ''
                this.Username = ''
                this.Image = ''
                this.Nationality = ''
                console.log('logged???')
               // AuthService.setActiveToken(res['data']['accessToken'])
                UserService.setActiveUser(res['data'])
                console.log('Profile updated successfully !!!')
            }).catch(err => {
                console.log(err)
            })

        }
    }
}
</script>

<style scoped>
    /* #nationality{
        width:850%;
        background-color: aliceblue;
        color:darkgray;
    } */
</style>