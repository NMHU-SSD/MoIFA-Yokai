var Cards = {
    name: "cards-component",
    props: ['cards','id'],
    template:`
        <!-- cards -->
        <div class='row'>
            <div class='col m-3 align-items-stretch' v-for='card,index in cards'>
                <div class="card bg-red mb-3">
                    <!-- credit and caption -->
                    <template v-if="card.sources && card.sources.length > 1">
                        <div :id="'carouselCardTopIndicators'+id" class="card-img-top bg-black carousel slide p-0 m-0" data-ride="false">
                            <ol class="carousel-indicators">
                                <li v-for="(source,i) in card.sources" :data-target="'#carouselCardTopIndicators'+id" :data-slide-to="i" :class="(i==0 ? 'active' : '')"></li>
                            </ol>
                            <div class="carousel-inner ">
                                 <div v-for="(source,i) in card.sources" :class="['carousel-item carousel-card', (i==0 ? 'active' : '')]">
                                    <vue-preview class="pointer d-block container-fluid p-0 m-0" :slides="[source]"></vue-preview>
                                </div>
                            </div>
                            <a class="carousel-control-prev" :href="'#carouselCardTopIndicators'+id" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" :href="'#carouselCardTopIndicators'+id" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </template>

                    
                    <video v-else-if='card.video' :src='card.video' class="card-img-top bg-black d-block img-fluid mx-auto pointer" controls></video>
                    
                    <div v-else-if='card.sources && card.sources.length == 1' class='card-img-container'>
                        <vue-preview  class="card-img-top pointer bg-black" :slides="[card.sources[0]]"></vue-preview>
                        <div class='card-img-overlay'> 
                            <i class="fas fa-expand color-white"></i>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="card-text row-fluid">
                            
                            <!-- credit and caption -->
                            <template v-if="card.credit && card.caption || card.caption && card.credits">
                                <div :id="'carouselCardBottomIndicators'+id" class="carousel carousel-height slide p-3 m-0" data-ride="false">
                                    <!-- loop through credits -->
                                    <ol class="carousel-indicators">
                                        <li :data-target="'#carouselCardBottomIndicators'+id" data-slide-to="0" class="active"></li>
                                        <li :data-target="'#carouselCardBottomIndicators'+id" data-slide-to="1"></li>
                                    </ol>
                                    <div class="carousel-inner container-fluid">
                                        <div v-if="card.credit" class="carousel-item active">
                                            <credits-component :credits="[card.credit]" />
                                        </div>
                                        <div v-if="card.credits" class="carousel-item active">
                                            <credits-component :credits="card.credits" />
                                        </div>
                                        <div v-if="card.caption" class="carousel-item">
                                            <p class="h6 color-white text-justify" v-html="card.caption"></p>
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <!-- credit -->
                            <template v-else-if="card.credit && !card.caption && !card.credits">
                                <div class="col-12 pt-2 pl-5 pr-5 m-0">
                                    <credits-component :credits="[card.credit]" />
                                </div>
                            </template>
                            <template v-else-if="card.credits && !card.caption && !card.credit">
                                <div class="col-12 pt-2 pl-5 pr-5 m-0">
                                    <credits-component :credits="card.credits" />
                                </div>
                            </template>

                            <!-- caption -->
                            <template v-if="card.caption && !card.credit && !card.credits ">
                                <div class="col-12 pt-2 pl-5 pr-5 m-0" >
                                    <p class="h5 color-white text-justify" v-html="card.caption"></p>
                                </div>
                            </template>

                            
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}