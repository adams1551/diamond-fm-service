<template>
    <main class="content-wrapper">
        <div class="mdc-layout-grid">
            <div class="mdc-layout-grid__inner">
              <div class="mdc-layout-grid__cell--span-8">
                <div class="mdc-card">
                    <form @submit.prevent="addAgent">
                  <h6 class="card-title">Add An Agent</h6>
                  <div class="template-demo">
                    <div class="mdc-layout-grid__inner">
                      <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-12-desktop">
                        <div class="mdc-text-field">
                          <input class="mdc-text-field__input" id="text-field-hero-input" v-model="PhoneNumber">
                          <div class="mdc-line-ripple"></div>
                          <label for="text-field-hero-input" class="mdc-floating-label" >PHONE NUMBER</label>
                        </div>
                      </div>
                      <!-- <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6-desktop">
                        <div class="mdc-text-field mdc-text-field--outlined">
                          <input class="mdc-text-field__input" id="text-field-hero-input">
                          <div class="mdc-notched-outline">
                            <div class="mdc-notched-outline__leading"></div>
                            <div class="mdc-notched-outline__notch">
                              <label for="text-field-hero-input" class="mdc-floating-label">Name</label>
                            </div>
                            <div class="mdc-notched-outline__trailing"></div>
                          </div>
                        </div>
                      </div> -->
                      <!-- <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6-desktop">
                        <div class="mdc-text-field mdc-text-field--outlined mdc-text-field--with-leading-icon">
                          <i class="material-icons mdc-text-field__icon">favorite</i>
                          <input class="mdc-text-field__input" id="text-field-hero-input">
                          <div class="mdc-notched-outline">
                            <div class="mdc-notched-outline__leading"></div>
                            <div class="mdc-notched-outline__notch">
                              <label for="text-field-hero-input" class="mdc-floating-label">Name</label>
                            </div>
                            <div class="mdc-notched-outline__trailing"></div>
                          </div>
                        </div>
                      </div> -->
                      <!-- <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6-desktop">
                        <div class="mdc-text-field mdc-text-field--outlined mdc-text-field--with-trailing-icon">
                          <i class="material-icons mdc-text-field__icon">visibility</i>
                          <input class="mdc-text-field__input" id="text-field-hero-input">
                          <div class="mdc-notched-outline">
                            <div class="mdc-notched-outline__leading"></div>
                            <div class="mdc-notched-outline__notch">
                              <label for="text-field-hero-input" class="mdc-floating-label">Name</label>
                            </div>
                            <div class="mdc-notched-outline__trailing"></div>
                          </div>
                        </div>
                      </div> -->
                      <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-12">
                            <!-- <span class="mdc-button mdc-button--raised w-100"> -->
                              <input class="mdc-button mdc-button--raised w-100" type="submit" value="Register">
                              <!-- Login -->
                            <!-- </span> -->
                          </div>
                    </div>
                  </div>
                    </form>
                </div>
              </div>
            </div>
          </div>
    </main>
</template>
<script>
 import AuthService from '../../service/auth';
import UserService from '../../service/user';
export default {
    name: 'AgentComponent',
    data(){
        return {
            PhoneNumber: ''
        }
    },
    methods:{
        addAgent(){
            // $event.preventDefault()
            AuthService.signupAgent({
                phoneNo: this.PhoneNumber
            }).then(res =>{
                this.PhoneNumber = ''
                AuthService.setActiveToken(res['data']['accessToken'])
                UserService.setActiveUser(res['data'])
                console.log('agent added')
            }).catch(err =>{
                console.log(err)
            })
        }
    }
}
</script>
<style scoped>
.content-wrapper,.mdc-layout-grid, .mdc-layout-grid__cell--span-8{
    justify-items: center !important;
    padding-top:6% !important;
    margin-left: 12%;
}
</style>