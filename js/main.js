
function switchInputPasswordMode(){
    let buttonSwitch = document.getElementById('buttonSwitchInput');
    let inputPassword = document.getElementById('inputPassword');

    //buttonSwitch.value = "Ocultar";

    if(inputPassword.type == "password"){
        inputPassword.type = "text";
        buttonSwitch.value = "Ocultar";
    }else{
        inputPassword.type = "password";
        buttonSwitch.value = "Mostrar";
    }
}

const containerNotifications = document.getElementById("containerNotifications");

class createToastMessage{
    constructor(tabTitle, tabMessage, tabColor, displayTime = null, tabLink=null, tabLinkMessage=null){

        this.tabTitle = tabTitle;
        this.tabMessage = tabMessage;
        this.tabColor = tabColor;
        this.displayTime = displayTime;
        this.tabLink = tabLink;
        this.tabLinkMessage = tabLinkMessage;

          // Show tab (Message)
          this.showTab();

        // Add timer if exists
        if(this.displayTime = displayTime){
            this.time_remain = this.displayTime;
            this.time_original = this.time_remain;
            this.time_percentage = 100;

            // Start timer
            this.notificationTab.addEventListener('mouseout', ()=>{
                this.displayTimer();
            });
    
            // Reset timer
            this.notificationTab.addEventListener('mouseover', ()=>{
                this.time_remain = this.time_original;
                this.time_percentage = 100;
                clearInterval(this.displayTimeCounter);
                this.notificationTimer.style.width = this.time_percentage + "%";
            });
            
            // Start timer (Default)
            this.displayTimer();
        }

        // Click to delete
        this.notificationTab.addEventListener('click', ()=>{
            this.cleanTab();
        });

    }

    // Create Tab
    showTab(){
        // Create tab

        // estructura de pestaña general
        this.notificationTab = document.createElement('div');
        this.notificationTab.classList.add('notificationTab');
        
            // estructura de titulo
            this.notificationTabTitle = document.createElement('div');
            this.notificationTabTitle.classList.add('blockLayoutTab');
            this.notificationTabTitle.classList.add('tabTitle');
            this.notificationTabTitle.innerHTML = this.tabTitle;

            // estructura de mensaje
            this.notificationTabText = document.createElement('div');
            this.notificationTabText.classList.add('blockLayoutTab');
            this.notificationTabText.innerHTML = this.tabMessage;

            // estructura de cronometro
            this.notificationTabTimer = document.createElement('div');
            this.notificationTabTimer.classList.add('blockLayoutTab');

            // cronometro (visual)
            this.notificationTimer = document.createElement('span');
            this.notificationTimer.style.background = this.tabColor;
            this.notificationTimer.classList.add('timerBar');

            // Join elements
            // Agrega cronometro visual a estructura de cronometro
            this.notificationTabTimer.appendChild(this.notificationTimer);


            if(this.tabLink){
                // configura el vinculo
                this.notificationTextA = document.createElement('a');
                this.notificationTextA.setAttribute("href", this.tabLink);
                this.notificationTextA.innerHTML = " " + this.tabLinkMessage;

                // inserta link
                this.notificationTabText.appendChild(this.notificationTextA);
            }

            // Agrega estructura de titulo a estructura de pestaña general
            this.notificationTab.appendChild(this.notificationTabTitle);

            //Agrega estructura de mensaje a estructura de pestaña general
            this.notificationTab.appendChild(this.notificationTabText);

            // Agrega estructura de cronometro a estructura de pestaña general
            this.notificationTab.appendChild(this.notificationTabTimer);

            // agregar estructura de pestaña general a la fila
            containerNotifications.appendChild(this.notificationTab);

            // Paint (element) - volver a pintar elemento para que la animacion ocurra
            this.notificationTab.clientHeight;

            //Add additional animation
            this.notificationTab.classList.add('containerNotificationTab-initialAnimation');
    }

    // Timer
    displayTimer(){
        this.displayTimeCounter = setInterval(() => {
            this.time_remain = (this.time_remain - 100);
            // calculate percentage
            this.time_percentage = ((100 / this.time_original) * this.time_remain);
            this.notificationTimer.style.width = this.time_percentage + "%";

            // Stop timer
            if(this.time_remain === 0 || this.time_remain <= 0){
             //   this.notificationTabTimer.style.width = "0%";
                clearInterval(this.displayTimeCounter);
                this.cleanTab();
            }
        }, 100);
    }

    // Destroy tab
    cleanTab(){
        // If timer exists
        if(this.displayTime){
            clearInterval(this.displayTimeCounter);
        }


        // Add class to animation
        this.notificationTab.classList.add('cleanTab');
        this.notificationTabText.classList.add('cleanTab-Text');
        this.notificationTabTitle.classList.add('cleanTab-Text');
        this.notificationTabTimer.classList.add('cleanTabBar');
        this.notificationTimer.classList.add('cleanTabBar');
        
        // Time out (Animation)
        this.notificationTab.remove();


        delete this.createToastMessage;
    }

}

function newToastMessage(tabTitle, tabMessage, tabColor, displayTime = null, tabLink=null, tabLinkMessage=null){
    let newMessage = new createToastMessage(tabTitle, tabMessage, tabColor, displayTime, tabLink, tabLinkMessage);
}

