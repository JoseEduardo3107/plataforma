function switchInputPasswordMode(){
    let buttonSwitch = document.getElementById('buttonSwitchInput');
    let inputPassword = document.getElementById('inputPassword');

    if(inputPassword.type == "password"){
        inputPassword.type = "text";
        buttonSwitch.value = "Ocultar";
    }else{
        inputPassword.type = "password";
        buttonSwitch.value = "Mostrar";
    }
}

// Queue
const containerNotifications = document.getElementById("containerNotifications");

// Class for notifications
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
        // Layout 1
        this.notificationTab = document.createElement('div');
        this.notificationTab.classList.add('notificationTab');
        
        // Layout 2
        this.notificationTabTitle = document.createElement('div');
        this.notificationTabTitle.classList.add('blockLayoutTab');
        this.notificationTabTitle.classList.add('tabTitle');
        this.notificationTabTitle.innerHTML = this.tabTitle;

        // Layout 3
        this.notificationTabText = document.createElement('div');
        this.notificationTabText.classList.add('blockLayoutTab');
        this.notificationTabText.innerHTML = this.tabMessage;

        // Layout 4
        this.notificationTabTimer = document.createElement('div');
        this.notificationTabTimer.classList.add('blockLayoutTab');

        // Layout 4 (visual)
        this.notificationTimer = document.createElement('span');
        this.notificationTimer.style.background = this.tabColor;
        this.notificationTimer.classList.add('timerBar');

        // Join elements
        // Add Layout 4 (visual) to Layout 4
        this.notificationTabTimer.appendChild(this.notificationTimer);

        // Add if exists link
        if(this.tabLink){
            // Layout 5 (Link)
            this.notificationTextA = document.createElement('a');
            this.notificationTextA.setAttribute("href", this.tabLink);
            this.notificationTextA.innerHTML = " " + this.tabLinkMessage;

            // Add Layout 5 to Layout 3
            this.notificationTabText.appendChild(this.notificationTextA);
        }

        // Add Layout 2 to Layout 1
        this.notificationTab.appendChild(this.notificationTabTitle);

        // Add Layout 3 to Layout 1
        this.notificationTab.appendChild(this.notificationTabText);

        // Add Layout 4 a Layout 1
        this.notificationTab.appendChild(this.notificationTabTimer);

        // Add Layout 1 to queue
        containerNotifications.appendChild(this.notificationTab);

        // Paint (element) on queue
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

// create new toast message (title, message, timer bar color [normal, hexadecimal, rgba], optional - time on screen [milliseconds], link [href], link [title])
function newToastMessage(tabTitle, tabMessage, tabColor, displayTime = null, tabLink=null, tabLinkMessage=null){
    let newMessage = new createToastMessage(tabTitle, tabMessage, tabColor, displayTime, tabLink, tabLinkMessage);
}