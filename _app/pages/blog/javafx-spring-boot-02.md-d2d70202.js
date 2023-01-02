import{S as pn,i as ln,s as cn,C as nt,w as rn,x as un,y as fn,z as kn,A as zt,q as vn,o as dn,B as mn,Q as qt,e,t as p,k as r,c as o,a as i,h as l,d as s,m as u,b as v,F as tt,g as c,G as t,D as wn}from"../../chunks/index-ca5692cf.js";import{P as hn}from"../../chunks/_post-3b80de77.js";/* empty css                                  */function gn(M){let k,h,y,P,f,w,b,Za,as,oa,ss,ts,pa,N,ns,es,la,$,os,ps,ia,T,ls,Sa,ya,ba,W,is,xa,R,cs,Aa,x,rs,j,us,fs,Ba,z,q,et,Ja,G,ks,Pa,U,Q,ot,ja,E,vs,ca,ds,ms,ra,ws,hs,Fa,F,Ut=`<code class="language-java"><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringBootApp</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">SpringBootApp</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Ia,V,gs,La,K,_s,Xa,Y,Es,Ca,I,Qt=`<code class="language-xml">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>java.version</span><span class="token punctuation">></span></span>17<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>java.version</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>javafx.version</span><span class="token punctuation">></span></span>17.0.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>javafx.version</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">></span></span>

  ...

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.openjfx<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>javafx-controls<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>$&#123;javafx.version&#125;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span></code>`,Oa,Z,Ss,Da,L,Vt=`<code class="language-java"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JavaFxApp</span> <span class="token keyword">extends</span> <span class="token class-name">Application</span> <span class="token punctuation">&#123;</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token class-name">Stage</span> primaryStage<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">&#123;</span>
        <span class="token class-name">Pane</span> helloPane <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pane</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Label</span><span class="token punctuation">(</span><span class="token string">"Hello JavaFx"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        primaryStage<span class="token punctuation">.</span><span class="token function">setScene</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Scene</span><span class="token punctuation">(</span>helloPane<span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        primaryStage<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Ha,d,ys,ua,bs,xs,fa,As,Bs,ka,Js,Ps,va,js,Fs,da,Is,Ls,Ma,X,Kt=`<code class="language-java"><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringBootApp</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token class-name">Application</span><span class="token punctuation">.</span><span class="token function">launch</span><span class="token punctuation">(</span><span class="token class-name">JavaFxApp</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Na,m,Xs,ma,Cs,Os,wa,Ds,Hs,ha,Ms,Ns,ga,$s,Ts,C,Ws,Rs,$a,O,Yt='<code class="language-text">Error: JavaFX runtime components are missing, and are required to run this application</code>',Ta,A,zs,_a,qs,Gs,Wa,D,Zt='<code class="language-properties"><span class="token attr-name">spring.main.web-application-type</span><span class="token punctuation">=</span><span class="token attr-value">none</span></code>',Ra,B,Us,Ea,Qs,Vs,za,aa,sa,pt,qa,ta,Ks,Ga,na,Ys,Ua,J,Zs,H,at,st;return{c(){k=e("div"),h=e("h3"),y=p("All articles in this series"),P=r(),f=e("ol"),w=e("li"),b=e("a"),Za=p("JavaFX with Spring Boot Part-01: Introduction"),as=r(),oa=e("li"),ss=p("JavaFX with Spring Boot Part-02: Basic Integration"),ts=r(),pa=e("li"),N=e("a"),ns=p("JavaFX with Spring Boot Part-03: Advanced Integration"),es=r(),la=e("li"),$=e("a"),os=p("JavaFX with Spring Boot Part-04: Using FXML"),ps=r(),ia=e("li"),T=e("a"),ls=p("JavaFX with Spring Boot Part-05: FxWeaver Integration"),Sa=r(),ya=e("br"),ba=r(),W=e("p"),is=p("In the article, I will present how to setup a JavaFX project with Spring Boot. This will be a super simple application only to demonstrate the initial setup."),xa=r(),R=e("h2"),cs=p("Creating an empty Spring Boot project"),Aa=r(),x=e("p"),rs=p("Since we\u2019ll be using Spring Boot, it makes sense to use "),j=e("a"),us=p("spring initialzr"),fs=p(" and create and empty project. Settings should look like this:"),Ba=r(),z=e("p"),q=e("img"),Ja=r(),G=e("p"),ks=p("Note that the only dependency is Lombok which is optional. Now let\u2019s take a look at the project structure."),Pa=r(),U=e("p"),Q=e("img"),ja=r(),E=e("p"),vs=p("As you can see nothing is special here. We only have one class as the main entry point of the application and that\u2019s it. Let\u2019s rename auto generated the class name from "),ca=e("code"),ds=p("JavafxSpringBootStarterApplication"),ms=p(" to "),ra=e("code"),ws=p("SpringBootApp"),hs=p("."),Fa=r(),F=e("pre"),Ia=r(),V=e("p"),gs=p("At this point, we haven\u2019t even added JavaFx as a dependency to our project."),La=r(),K=e("h2"),_s=p("Setting up the initial JavaFX Hello World app"),Xa=r(),Y=e("p"),Es=p("Let\u2019s start by adding JavaFX as a maven dependency first."),Ca=r(),I=e("pre"),Oa=r(),Z=e("p"),Ss=p("Now we can write our super simple JavaFx hello world application class."),Da=r(),L=e("pre"),Ha=r(),d=e("p"),ys=p("And we launch "),ua=e("code"),bs=p("JavaFxApp"),xs=p(" from "),fa=e("code"),As=p("SpringBootApp"),Bs=p(" as follows. Note that we replaced "),ka=e("code"),Js=p("SpringApplication.run"),Ps=p(" with JavaFX\u2019s "),va=e("code"),js=p("Application"),Fs=p(" class as "),da=e("code"),Is=p("Application.launch"),Ls=p("."),Ma=r(),X=e("pre"),Na=r(),m=e("p"),Xs=p("In theory, we could merge move "),ma=e("code"),Cs=p("@SpringBootApplication"),Os=p(" and the "),wa=e("code"),Ds=p("main"),Hs=p(" method into the "),ha=e("code"),Ms=p("JavaFxApp"),Ns=p(" class and could get rid of "),ga=e("code"),$s=p("SpringBootApp"),Ts=p(" entirely. However, this wouldn\u2019t work for "),C=e("a"),Ws=p("a reason related to Java Modules"),Rs=p(". In a nutshell, if our application is a non-modular application, we have to separate application classes this way. Otherwise, we see the following error message:"),$a=r(),O=e("pre"),Ta=r(),A=e("p"),zs=p("Let\u2019s not forget to let Spring know that this is not a web application by adding the following to "),_a=e("code"),qs=p("application.properties"),Gs=p("."),Wa=r(),D=e("pre"),Ra=r(),B=e("p"),Us=p("Now if we run our "),Ea=e("code"),Qs=p("SpringBootApp"),Vs=p(" we should see something like this:"),za=r(),aa=e("p"),sa=e("img"),qa=r(),ta=e("h2"),Ks=p("Conclusion"),Ga=r(),na=e("p"),Ys=p("We have hooked up Spring with JavaFx but to able to making the full advantage of Spring, we need a little bit more wiring and I will explain that in the next article."),Ua=r(),J=e("p"),Zs=p("Source code for this article can be found "),H=e("a"),at=p("here"),st=p("."),this.h()},l(a){k=o(a,"DIV",{class:!0});var n=i(k);h=o(n,"H3",{});var lt=i(h);y=l(lt,"All articles in this series"),lt.forEach(s),P=u(n),f=o(n,"OL",{});var S=i(f);w=o(S,"LI",{});var it=i(w);b=o(it,"A",{href:!0});var ct=i(b);Za=l(ct,"JavaFX with Spring Boot Part-01: Introduction"),ct.forEach(s),it.forEach(s),as=u(S),oa=o(S,"LI",{});var rt=i(oa);ss=l(rt,"JavaFX with Spring Boot Part-02: Basic Integration"),rt.forEach(s),ts=u(S),pa=o(S,"LI",{});var ut=i(pa);N=o(ut,"A",{href:!0});var ft=i(N);ns=l(ft,"JavaFX with Spring Boot Part-03: Advanced Integration"),ft.forEach(s),ut.forEach(s),es=u(S),la=o(S,"LI",{});var kt=i(la);$=o(kt,"A",{href:!0});var vt=i($);os=l(vt,"JavaFX with Spring Boot Part-04: Using FXML"),vt.forEach(s),kt.forEach(s),ps=u(S),ia=o(S,"LI",{});var dt=i(ia);T=o(dt,"A",{href:!0});var mt=i(T);ls=l(mt,"JavaFX with Spring Boot Part-05: FxWeaver Integration"),mt.forEach(s),dt.forEach(s),S.forEach(s),n.forEach(s),Sa=u(a),ya=o(a,"BR",{}),ba=u(a),W=o(a,"P",{});var wt=i(W);is=l(wt,"In the article, I will present how to setup a JavaFX project with Spring Boot. This will be a super simple application only to demonstrate the initial setup."),wt.forEach(s),xa=u(a),R=o(a,"H2",{});var ht=i(R);cs=l(ht,"Creating an empty Spring Boot project"),ht.forEach(s),Aa=u(a),x=o(a,"P",{});var Qa=i(x);rs=l(Qa,"Since we\u2019ll be using Spring Boot, it makes sense to use "),j=o(Qa,"A",{href:!0,rel:!0});var gt=i(j);us=l(gt,"spring initialzr"),gt.forEach(s),fs=l(Qa," and create and empty project. Settings should look like this:"),Qa.forEach(s),Ba=u(a),z=o(a,"P",{});var _t=i(z);q=o(_t,"IMG",{src:!0,alt:!0}),_t.forEach(s),Ja=u(a),G=o(a,"P",{});var Et=i(G);ks=l(Et,"Note that the only dependency is Lombok which is optional. Now let\u2019s take a look at the project structure."),Et.forEach(s),Pa=u(a),U=o(a,"P",{});var St=i(U);Q=o(St,"IMG",{src:!0,alt:!0}),St.forEach(s),ja=u(a),E=o(a,"P",{});var ea=i(E);vs=l(ea,"As you can see nothing is special here. We only have one class as the main entry point of the application and that\u2019s it. Let\u2019s rename auto generated the class name from "),ca=o(ea,"CODE",{});var yt=i(ca);ds=l(yt,"JavafxSpringBootStarterApplication"),yt.forEach(s),ms=l(ea," to "),ra=o(ea,"CODE",{});var bt=i(ra);ws=l(bt,"SpringBootApp"),bt.forEach(s),hs=l(ea,"."),ea.forEach(s),Fa=u(a),F=o(a,"PRE",{class:!0});var an=i(F);an.forEach(s),Ia=u(a),V=o(a,"P",{});var xt=i(V);gs=l(xt,"At this point, we haven\u2019t even added JavaFx as a dependency to our project."),xt.forEach(s),La=u(a),K=o(a,"H2",{});var At=i(K);_s=l(At,"Setting up the initial JavaFX Hello World app"),At.forEach(s),Xa=u(a),Y=o(a,"P",{});var Bt=i(Y);Es=l(Bt,"Let\u2019s start by adding JavaFX as a maven dependency first."),Bt.forEach(s),Ca=u(a),I=o(a,"PRE",{class:!0});var sn=i(I);sn.forEach(s),Oa=u(a),Z=o(a,"P",{});var Jt=i(Z);Ss=l(Jt,"Now we can write our super simple JavaFx hello world application class."),Jt.forEach(s),Da=u(a),L=o(a,"PRE",{class:!0});var tn=i(L);tn.forEach(s),Ha=u(a),d=o(a,"P",{});var g=i(d);ys=l(g,"And we launch "),ua=o(g,"CODE",{});var Pt=i(ua);bs=l(Pt,"JavaFxApp"),Pt.forEach(s),xs=l(g," from "),fa=o(g,"CODE",{});var jt=i(fa);As=l(jt,"SpringBootApp"),jt.forEach(s),Bs=l(g," as follows. Note that we replaced "),ka=o(g,"CODE",{});var Ft=i(ka);Js=l(Ft,"SpringApplication.run"),Ft.forEach(s),Ps=l(g," with JavaFX\u2019s "),va=o(g,"CODE",{});var It=i(va);js=l(It,"Application"),It.forEach(s),Fs=l(g," class as "),da=o(g,"CODE",{});var Lt=i(da);Is=l(Lt,"Application.launch"),Lt.forEach(s),Ls=l(g,"."),g.forEach(s),Ma=u(a),X=o(a,"PRE",{class:!0});var nn=i(X);nn.forEach(s),Na=u(a),m=o(a,"P",{});var _=i(m);Xs=l(_,"In theory, we could merge move "),ma=o(_,"CODE",{});var Xt=i(ma);Cs=l(Xt,"@SpringBootApplication"),Xt.forEach(s),Os=l(_," and the "),wa=o(_,"CODE",{});var Ct=i(wa);Ds=l(Ct,"main"),Ct.forEach(s),Hs=l(_," method into the "),ha=o(_,"CODE",{});var Ot=i(ha);Ms=l(Ot,"JavaFxApp"),Ot.forEach(s),Ns=l(_," class and could get rid of "),ga=o(_,"CODE",{});var Dt=i(ga);$s=l(Dt,"SpringBootApp"),Dt.forEach(s),Ts=l(_," entirely. However, this wouldn\u2019t work for "),C=o(_,"A",{href:!0,rel:!0});var Ht=i(C);Ws=l(Ht,"a reason related to Java Modules"),Ht.forEach(s),Rs=l(_,". In a nutshell, if our application is a non-modular application, we have to separate application classes this way. Otherwise, we see the following error message:"),_.forEach(s),$a=u(a),O=o(a,"PRE",{class:!0});var en=i(O);en.forEach(s),Ta=u(a),A=o(a,"P",{});var Va=i(A);zs=l(Va,"Let\u2019s not forget to let Spring know that this is not a web application by adding the following to "),_a=o(Va,"CODE",{});var Mt=i(_a);qs=l(Mt,"application.properties"),Mt.forEach(s),Gs=l(Va,"."),Va.forEach(s),Wa=u(a),D=o(a,"PRE",{class:!0});var on=i(D);on.forEach(s),Ra=u(a),B=o(a,"P",{});var Ka=i(B);Us=l(Ka,"Now if we run our "),Ea=o(Ka,"CODE",{});var Nt=i(Ea);Qs=l(Nt,"SpringBootApp"),Nt.forEach(s),Vs=l(Ka," we should see something like this:"),Ka.forEach(s),za=u(a),aa=o(a,"P",{});var $t=i(aa);sa=o($t,"IMG",{src:!0,alt:!0}),$t.forEach(s),qa=u(a),ta=o(a,"H2",{});var Tt=i(ta);Ks=l(Tt,"Conclusion"),Tt.forEach(s),Ga=u(a),na=o(a,"P",{});var Wt=i(na);Ys=l(Wt,"We have hooked up Spring with JavaFx but to able to making the full advantage of Spring, we need a little bit more wiring and I will explain that in the next article."),Wt.forEach(s),Ua=u(a),J=o(a,"P",{});var Ya=i(J);Zs=l(Ya,"Source code for this article can be found "),H=o(Ya,"A",{href:!0,rel:!0});var Rt=i(H);at=l(Rt,"here"),Rt.forEach(s),st=l(Ya,"."),Ya.forEach(s),this.h()},h(){v(b,"href","/blog/javafx-spring-boot-01"),v(N,"href","/blog/javafx-spring-boot-03"),v($,"href","/blog/javafx-spring-boot-04"),v(T,"href","/blog/javafx-spring-boot-05"),v(k,"class","table-of-contents"),v(j,"href","https://start.spring.io/"),v(j,"rel","nofollow"),tt(q.src,et="/images/blog/javafx-spring-boot-starter-02-01.png")||v(q,"src",et),v(q,"alt","spring initialz configuration"),tt(Q.src,ot="/images/blog/javafx-spring-boot-starter-02-02.png")||v(Q,"src",ot),v(Q,"alt","spring boot project structure"),v(F,"class","language-java"),v(I,"class","language-xml"),v(L,"class","language-java"),v(X,"class","language-java"),v(C,"href","http://mail.openjdk.java.net/pipermail/openjfx-dev/2018-June/021977.html"),v(C,"rel","nofollow"),v(O,"class","language-text"),v(D,"class","language-properties"),tt(sa.src,pt="/images/blog/javafx-spring-boot-starter-02-03.png")||v(sa,"src",pt),v(sa,"alt","spring boot project structure"),v(H,"href","https://github.com/hrzafer/javafx-spring-boot-starter/releases/tag/v0.2"),v(H,"rel","nofollow")},m(a,n){c(a,k,n),t(k,h),t(h,y),t(k,P),t(k,f),t(f,w),t(w,b),t(b,Za),t(f,as),t(f,oa),t(oa,ss),t(f,ts),t(f,pa),t(pa,N),t(N,ns),t(f,es),t(f,la),t(la,$),t($,os),t(f,ps),t(f,ia),t(ia,T),t(T,ls),c(a,Sa,n),c(a,ya,n),c(a,ba,n),c(a,W,n),t(W,is),c(a,xa,n),c(a,R,n),t(R,cs),c(a,Aa,n),c(a,x,n),t(x,rs),t(x,j),t(j,us),t(x,fs),c(a,Ba,n),c(a,z,n),t(z,q),c(a,Ja,n),c(a,G,n),t(G,ks),c(a,Pa,n),c(a,U,n),t(U,Q),c(a,ja,n),c(a,E,n),t(E,vs),t(E,ca),t(ca,ds),t(E,ms),t(E,ra),t(ra,ws),t(E,hs),c(a,Fa,n),c(a,F,n),F.innerHTML=Ut,c(a,Ia,n),c(a,V,n),t(V,gs),c(a,La,n),c(a,K,n),t(K,_s),c(a,Xa,n),c(a,Y,n),t(Y,Es),c(a,Ca,n),c(a,I,n),I.innerHTML=Qt,c(a,Oa,n),c(a,Z,n),t(Z,Ss),c(a,Da,n),c(a,L,n),L.innerHTML=Vt,c(a,Ha,n),c(a,d,n),t(d,ys),t(d,ua),t(ua,bs),t(d,xs),t(d,fa),t(fa,As),t(d,Bs),t(d,ka),t(ka,Js),t(d,Ps),t(d,va),t(va,js),t(d,Fs),t(d,da),t(da,Is),t(d,Ls),c(a,Ma,n),c(a,X,n),X.innerHTML=Kt,c(a,Na,n),c(a,m,n),t(m,Xs),t(m,ma),t(ma,Cs),t(m,Os),t(m,wa),t(wa,Ds),t(m,Hs),t(m,ha),t(ha,Ms),t(m,Ns),t(m,ga),t(ga,$s),t(m,Ts),t(m,C),t(C,Ws),t(m,Rs),c(a,$a,n),c(a,O,n),O.innerHTML=Yt,c(a,Ta,n),c(a,A,n),t(A,zs),t(A,_a),t(_a,qs),t(A,Gs),c(a,Wa,n),c(a,D,n),D.innerHTML=Zt,c(a,Ra,n),c(a,B,n),t(B,Us),t(B,Ea),t(Ea,Qs),t(B,Vs),c(a,za,n),c(a,aa,n),t(aa,sa),c(a,qa,n),c(a,ta,n),t(ta,Ks),c(a,Ga,n),c(a,na,n),t(na,Ys),c(a,Ua,n),c(a,J,n),t(J,Zs),t(J,H),t(H,at),t(J,st)},p:wn,d(a){a&&s(k),a&&s(Sa),a&&s(ya),a&&s(ba),a&&s(W),a&&s(xa),a&&s(R),a&&s(Aa),a&&s(x),a&&s(Ba),a&&s(z),a&&s(Ja),a&&s(G),a&&s(Pa),a&&s(U),a&&s(ja),a&&s(E),a&&s(Fa),a&&s(F),a&&s(Ia),a&&s(V),a&&s(La),a&&s(K),a&&s(Xa),a&&s(Y),a&&s(Ca),a&&s(I),a&&s(Oa),a&&s(Z),a&&s(Da),a&&s(L),a&&s(Ha),a&&s(d),a&&s(Ma),a&&s(X),a&&s(Na),a&&s(m),a&&s($a),a&&s(O),a&&s(Ta),a&&s(A),a&&s(Wa),a&&s(D),a&&s(Ra),a&&s(B),a&&s(za),a&&s(aa),a&&s(qa),a&&s(ta),a&&s(Ga),a&&s(na),a&&s(Ua),a&&s(J)}}}function _n(M){let k,h;const y=[M[0],Gt];let P={$$slots:{default:[gn]},$$scope:{ctx:M}};for(let f=0;f<y.length;f+=1)P=nt(P,y[f]);return k=new hn({props:P}),{c(){rn(k.$$.fragment)},l(f){un(k.$$.fragment,f)},m(f,w){fn(k,f,w),h=!0},p(f,[w]){const b=w&1?kn(y,[w&1&&zt(f[0]),w&0&&zt(Gt)]):{};w&2&&(b.$$scope={dirty:w,ctx:f}),k.$set(b)},i(f){h||(vn(k.$$.fragment,f),h=!0)},o(f){dn(k.$$.fragment,f),h=!1},d(f){mn(k,f)}}}const Gt={title:"JavaFX with Spring Boot Part-02: Basic Integration",date:"2022-04-15",categories:["javafx","spring"]};function En(M,k,h){return M.$$set=y=>{h(0,k=nt(nt({},k),qt(y)))},k=qt(k),[k]}class xn extends pn{constructor(k){super(),ln(this,k,En,_n,cn,{})}}export{xn as default,Gt as metadata};
