(self.webpackChunkprinceps_survey=self.webpackChunkprinceps_survey||[]).push([[99],{9099:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ReceiveTokenModule:()=>g});var i=n(6274),r=n(7066),s=n(2741),c=n(1790),a=n(5543),o=n(4625),u=n(1579),d=n(8923);function l(e,t){1&e&&s._UZ(0,"i",8)}let h=(()=>{class e{constructor(e,t,n){this.authservice=e,this.router=n,t.queryParams.subscribe(e=>{this.token=e.redirect_token,this.redirectUrl=e.continue})}ngOnInit(){var e=this;return(0,r.Z)(function*(){e.token?(yield e.authservice.storeToken(e.token),setTimeout(()=>{e.authenticateToken()})):setTimeout(()=>{e.router.navigate(["/"])})})()}authenticateToken(){this.authservice.authenticateToken().subscribe(e=>{this.authservice.storeUser(e.user),this.redirectUrl&&void 0!==this.redirectUrl&&"undefined"!==this.redirectUrl?this.router.navigateByUrl(this.redirectUrl):this.router.navigate(["/"])})}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(c.e),s.Y36(a.gz),s.Y36(a.F0))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-receive-token"]],decls:12,vars:1,consts:[[1,"waiting_container","text--center"],["src","assets/images/logo-full.png","width","150","alt",""],[1,"my-4"],[1,"my-5"],[1,"text--medium","mt-5"],[1,"d-flex","mt-5","text-center","justify-content-center","align-items-center"],["indicatorTemplate",""],["nzSimple","",3,"nzIndicator"],["nz-icon","","nzType","loading"]],template:function(e,t){if(1&e&&(s.TgZ(0,"div",0),s.TgZ(1,"div"),s._UZ(2,"img",1),s.qZA(),s.TgZ(3,"div",2),s.TgZ(4,"h1",3),s._uU(5,"Validating your credentials before accessing Staff Portal"),s.qZA(),s.TgZ(6,"p",4),s._uU(7,"This process is automatic. Your browser will redirect you to your requested content shortly"),s.qZA(),s.TgZ(8,"div",5),s.YNc(9,l,1,0,"ng-template",null,6,s.W1O),s._UZ(11,"nz-spin",7),s.qZA(),s.qZA(),s.qZA()),2&e){const e=s.MAs(10);s.xp6(11),s.Q6J("nzIndicator",e)}},directives:[o.W,u.Ls,d.w],styles:[".waiting_container[_ngcontent-%COMP%]{padding:2rem}@media screen and (min-width: 768px){.waiting_container[_ngcontent-%COMP%]{padding:5rem}}@media screen and (min-width: 992px){.waiting_container[_ngcontent-%COMP%]{padding:10rem}}"]}),e})();var p=n(5069);let g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[i.ez,p.m,a.Bz.forChild([{path:"",component:h}])]]}),e})()}}]);