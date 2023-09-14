import React from "react";

function FaqTabs() {
    return(
        <>
        <div class="d-flex align-items-start">
            <div class="nav col-lg-3 flex-column nav-pills me-3" role="tablist" aria-orientation="vertical">
                <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#home" type="button" role="tab">Home</button>
                <button class="nav-link" data-bs-toggle="pill" data-bs-target="#profile" type="button" role="tab">Profile</button>
                <button class="nav-link" data-bs-toggle="pill" data-bs-target="#messages" type="button" role="tab">Messages</button>
                <button class="nav-link" data-bs-toggle="pill" data-bs-target="#settings" type="button" role="tab">Settings</button>
                <button class="nav-link" data-bs-toggle="pill" data-bs-target="#partners" type="button" role="tab">Partners</button>
                <button class="nav-link" data-bs-toggle="pill" data-bs-target="#licenses" type="button" role="tab">Licenses</button>
                <button class="nav-link" data-bs-toggle="pill" data-bs-target="#rewards" type="button" role="tab">Rewards & Credits</button>
            </div>
        <div class="tab-content col-lg-9" id="v-pills-tabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel">
                 <div className="comoniu-tabs">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#tba1" aria-expanded="true" aria-controls="collapseOne">
                            Proin faucibus turpis quis nunc egestas, porttitor luctus quam ?
                            </button>
                        </h2>
                        <div id="tba1" class="accordion-collapse collapse show">
                            <div class="accordion-body">
                                <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                                 as necessary, making this the first true generator on the Internet.</p>
                            </div>
                        </div>
                        </div>
                        <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tba2" aria-expanded="false" aria-controls="collapseTwo">
                            Aenean sed nibh nec arcu viverra lobortis ?
                            </button>
                        </h2>
                        <div id="tba2" class="accordion-collapse collapse">
                            <div class="accordion-body">
                            <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                            as necessary, making this the first true generator on the Internet.</p>
                            </div>
                        </div>
                        </div>
                        <div class="accordion-item">
                        <h2 class="accordion-header" >
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tba32">
                            Mauris sit amet quam fermentum, tempus est sit amet ?
                            </button>
                        </h2>
                        <div id="tba3" class="accordion-collapse collapse" >
                            <div class="accordion-body">
                            <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                            as necessary, making this the first true generator on the Internet.</p>
                            </div>
                        </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tba4">
                                Mauris sit amet quam fermentum, tempus est sit amet ?
                                </button>
                            </h2>
                            <div id="tba4" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                                as necessary, making this the first true generator on the Internet.</p>
                                </div>
                            </div>
                        </div>


                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tba5">
                                Mauris sit amet quam fermentum, tempus est sit amet ?
                                </button>
                            </h2>
                            <div id="tba5" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                                as necessary, making this the first true generator on the Internet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel">
                <div className="comoniu-tabs">
                    <div class="accordion">
                        <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#tba1" aria-expanded="true" aria-controls="collapseOne">
                            Proin faucibus turpis quis nunc egestas, porttitor luctus quam ?
                            </button>
                        </h2>
                        <div id="tba1" class="accordion-collapse collapse show">
                            <div class="accordion-body">
                                <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                                as necessary, making this the first true generator on the Internet.</p>
                            </div>
                        </div>
                        </div>
                        <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tba2" aria-expanded="false" aria-controls="collapseTwo">
                            Aenean sed nibh nec arcu viverra lobortis ?
                            </button>
                        </h2>
                        <div id="tba2" class="accordion-collapse collapse">
                            <div class="accordion-body">
                            <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                            as necessary, making this the first true generator on the Internet.</p>
                            </div>
                        </div>
                        </div>
                        <div class="accordion-item">
                        <h2 class="accordion-header" >
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tba32">
                            Mauris sit amet quam fermentum, tempus est sit amet ?
                            </button>
                        </h2>
                        <div id="tba3" class="accordion-collapse collapse" >
                            <div class="accordion-body">
                            <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                            as necessary, making this the first true generator on the Internet.</p>
                            </div>
                        </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tba4">
                                Mauris sit amet quam fermentum, tempus est sit amet ?
                                </button>
                            </h2>
                            <div id="tba4" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                                as necessary, making this the first true generator on the Internet.</p>
                                </div>
                            </div>
                        </div>


                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tba5">
                                Mauris sit amet quam fermentum, tempus est sit amet ?
                                </button>
                            </h2>
                            <div id="tba5" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                                as necessary, making this the first true generator on the Internet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="messages" role="tabpanel">
                <div class="accordion">
                    <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#tba1" aria-expanded="true" aria-controls="collapseOne">
                        Proin faucibus turpis quis nunc egestas, porttitor luctus quam ?
                        </button>
                    </h2>
                    <div id="tba1" class="accordion-collapse collapse show">
                        <div class="accordion-body">
                            <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                            as necessary, making this the first true generator on the Internet.</p>
                        </div>
                    </div>
                    </div>
                    <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tba2" aria-expanded="false" aria-controls="collapseTwo">
                        Aenean sed nibh nec arcu viverra lobortis ?
                        </button>
                    </h2>
                    <div id="tba2" class="accordion-collapse collapse">
                        <div class="accordion-body">
                        <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                        as necessary, making this the first true generator on the Internet.</p>
                        </div>
                    </div>
                    </div>
                    <div class="accordion-item">
                    <h2 class="accordion-header" >
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tba32">
                        Mauris sit amet quam fermentum, tempus est sit amet ?
                        </button>
                    </h2>
                    <div id="tba3" class="accordion-collapse collapse" >
                        <div class="accordion-body">
                        <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                        as necessary, making this the first true generator on the Internet.</p>
                        </div>
                    </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tba4">
                            Mauris sit amet quam fermentum, tempus est sit amet ?
                            </button>
                        </h2>
                        <div id="tba4" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                            as necessary, making this the first true generator on the Internet.</p>
                            </div>
                        </div>
                    </div>


                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tba5">
                            Mauris sit amet quam fermentum, tempus est sit amet ?
                            </button>
                        </h2>
                        <div id="tba5" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                            as necessary, making this the first true generator on the Internet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="settings" role="tabpanel">
                <div class="accordion">
                    <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#tba1" aria-expanded="true" aria-controls="collapseOne">
                        Proin faucibus turpis quis nunc egestas, porttitor luctus quam ?
                        </button>
                    </h2>
                    <div id="tba1" class="accordion-collapse collapse show">
                        <div class="accordion-body">
                            <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                            as necessary, making this the first true generator on the Internet.</p>
                        </div>
                    </div>
                    </div>
                    <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tba2" aria-expanded="false" aria-controls="collapseTwo">
                        Aenean sed nibh nec arcu viverra lobortis ?
                        </button>
                    </h2>
                    <div id="tba2" class="accordion-collapse collapse">
                        <div class="accordion-body">
                        <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                        as necessary, making this the first true generator on the Internet.</p>
                        </div>
                    </div>
                    </div>
                    <div class="accordion-item">
                    <h2 class="accordion-header" >
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tba32">
                        Mauris sit amet quam fermentum, tempus est sit amet ?
                        </button>
                    </h2>
                    <div id="tba3" class="accordion-collapse collapse" >
                        <div class="accordion-body">
                        <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                        as necessary, making this the first true generator on the Internet.</p>
                        </div>
                    </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tba4">
                            Mauris sit amet quam fermentum, tempus est sit amet ?
                            </button>
                        </h2>
                        <div id="tba4" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                            as necessary, making this the first true generator on the Internet.</p>
                            </div>
                        </div>
                    </div>


                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tba5">
                            Mauris sit amet quam fermentum, tempus est sit amet ?
                            </button>
                        </h2>
                        <div id="tba5" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                            as necessary, making this the first true generator on the Internet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="partners" role="tabpanel">
                <div class="accordion">
                    <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#tba1" aria-expanded="true" aria-controls="collapseOne">
                        Proin faucibus turpis quis nunc egestas, porttitor luctus quam ?
                        </button>
                    </h2>
                    <div id="tba1" class="accordion-collapse collapse show">
                        <div class="accordion-body">
                            <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                            as necessary, making this the first true generator on the Internet.</p>
                        </div>
                    </div>
                    </div>
                    <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tba2" aria-expanded="false" aria-controls="collapseTwo">
                        Aenean sed nibh nec arcu viverra lobortis ?
                        </button>
                    </h2>
                    <div id="tba2" class="accordion-collapse collapse">
                        <div class="accordion-body">
                        <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                        as necessary, making this the first true generator on the Internet.</p>
                        </div>
                    </div>
                    </div>
                    <div class="accordion-item">
                    <h2 class="accordion-header" >
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tba32">
                        Mauris sit amet quam fermentum, tempus est sit amet ?
                        </button>
                    </h2>
                    <div id="tba3" class="accordion-collapse collapse" >
                        <div class="accordion-body">
                        <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                        as necessary, making this the first true generator on the Internet.</p>
                        </div>
                    </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tba4">
                            Mauris sit amet quam fermentum, tempus est sit amet ?
                            </button>
                        </h2>
                        <div id="tba4" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                            as necessary, making this the first true generator on the Internet.</p>
                            </div>
                        </div>
                    </div>


                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tba5">
                            Mauris sit amet quam fermentum, tempus est sit amet ?
                            </button>
                        </h2>
                        <div id="tba5" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                            as necessary, making this the first true generator on the Internet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="licenses" role="tabpanel">
                <div class="accordion">
                        <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#tba1" aria-expanded="true" aria-controls="collapseOne">
                            Proin faucibus turpis quis nunc egestas, porttitor luctus quam ?
                            </button>
                        </h2>
                        <div id="tba1" class="accordion-collapse collapse show">
                            <div class="accordion-body">
                                <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                                as necessary, making this the first true generator on the Internet.</p>
                            </div>
                        </div>
                        </div>
                        <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tba2" aria-expanded="false" aria-controls="collapseTwo">
                            Aenean sed nibh nec arcu viverra lobortis ?
                            </button>
                        </h2>
                        <div id="tba2" class="accordion-collapse collapse">
                            <div class="accordion-body">
                            <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                            as necessary, making this the first true generator on the Internet.</p>
                            </div>
                        </div>
                        </div>
                        <div class="accordion-item">
                        <h2 class="accordion-header" >
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tba32">
                            Mauris sit amet quam fermentum, tempus est sit amet ?
                            </button>
                        </h2>
                        <div id="tba3" class="accordion-collapse collapse" >
                            <div class="accordion-body">
                            <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                            as necessary, making this the first true generator on the Internet.</p>
                            </div>
                        </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tba4">
                                Mauris sit amet quam fermentum, tempus est sit amet ?
                                </button>
                            </h2>
                            <div id="tba4" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                                as necessary, making this the first true generator on the Internet.</p>
                                </div>
                            </div>
                        </div>


                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tba5">
                                Mauris sit amet quam fermentum, tempus est sit amet ?
                                </button>
                            </h2>
                            <div id="tba5" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                                as necessary, making this the first true generator on the Internet.</p>
                                </div>
                            </div>
                        </div>
                 </div>
            </div>
            <div class="tab-pane fade" id="rewards" role="tabpanel">
                    <div class="accordion">
                        <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#tba1" aria-expanded="true" aria-controls="collapseOne">
                            Proin faucibus turpis quis nunc egestas, porttitor luctus quam ?
                            </button>
                        </h2>
                        <div id="tba1" class="accordion-collapse collapse show">
                            <div class="accordion-body">
                                <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                                as necessary, making this the first true generator on the Internet.</p>
                            </div>
                        </div>
                        </div>
                        <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tba2" aria-expanded="false" aria-controls="collapseTwo">
                            Aenean sed nibh nec arcu viverra lobortis ?
                            </button>
                        </h2>
                        <div id="tba2" class="accordion-collapse collapse">
                            <div class="accordion-body">
                            <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                            as necessary, making this the first true generator on the Internet.</p>
                            </div>
                        </div>
                        </div>
                        <div class="accordion-item">
                        <h2 class="accordion-header" >
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tba32">
                            Mauris sit amet quam fermentum, tempus est sit amet ?
                            </button>
                        </h2>
                        <div id="tba3" class="accordion-collapse collapse" >
                            <div class="accordion-body">
                            <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                            as necessary, making this the first true generator on the Internet.</p>
                            </div>
                        </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tba4">
                                Mauris sit amet quam fermentum, tempus est sit amet ?
                                </button>
                            </h2>
                            <div id="tba4" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                                as necessary, making this the first true generator on the Internet.</p>
                                </div>
                            </div>
                        </div>


                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tba5">
                                Mauris sit amet quam fermentum, tempus est sit amet ?
                                </button>
                            </h2>
                            <div id="tba5" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                                as necessary, making this the first true generator on the Internet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
            
            </div>
        </div>
      </div>
        </>
    );
}

export default FaqTabs;