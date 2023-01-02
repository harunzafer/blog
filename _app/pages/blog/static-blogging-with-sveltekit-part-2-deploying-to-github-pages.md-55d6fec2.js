import{S as Pe,i as Le,s as Se,C as me,w as ze,x as Me,y as Ae,z as Ne,A as He,q as Re,o as Be,B as Fe,Q as xe,e as s,t as i,k as v,c as n,a as u,h as r,d as o,m as y,b as qe,g as p,G as t,D as Je}from"../../chunks/index-ca5692cf.js";import{P as Ke}from"../../chunks/_post-3b80de77.js";function Te(x){let a,m,_,h,l,d,E,K,A,k,$e=`<code class="language-undefined">&quot;build&quot;: &quot;rm -rf build &amp;&amp; svelte-kit build &amp;&amp; touch build/.nojekyll &amp;&amp; echo harunzafer.com &gt;&gt; build/CNAME&quot;,
&quot;deploy&quot;: &quot;npm run build &amp;&amp; npx gh-pages -d build -b master -r git@main:hrzafer/hrzafer.github.io.git -t true&quot;,&#96;</code>`,N,f,q,j,T,Y,Q,D,G,U,V,W,g,O,X,Z,P,ee,te,L,oe,ae,le,b,S,se,ie,z,ne,re,M,ue,ce,R,B,F,$,pe,J,I,je=`<code class="language-js">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'article coming soon'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`;return{c(){a=s("p"),m=i("In the previous article we talked about creating a static blog with SvelteKit and I pointed out some good articles as starting points. In this article, I want to share my configuration to deploy my blog to GitHub pages."),_=v(),h=s("p"),l=i("First of all you need a public repository for hosting. You can either have two separate repositories for source code and hosted files or you can have a single repo with two branches."),d=v(),E=s("p"),K=i("In my case, I use separate repositories. Here is my packages.json scripts to build and deploy my blog."),A=v(),k=s("pre"),N=v(),f=s("ul"),q=s("li"),j=s("code"),T=i("touch build/.nojekyll"),Y=i(" is to tell GitHub, we\u2019re not using Jekyll."),Q=v(),D=s("li"),G=s("code"),U=i("echo harunzafer.com >> build/CNAME"),V=i(" is to tell GitHub we\u2019re using a custom domain."),W=v(),g=s("li"),O=s("code"),X=i("npx gh-pages"),Z=i(" will be pushing "),P=s("code"),ee=i("build"),te=i(" folder to the "),L=s("code"),oe=i("master"),ae=i(" branch of"),le=v(),b=s("li"),S=s("code"),se=i("-t true"),ie=i(" flag is to tell "),z=s("code"),ne=i("gh-pages"),re=i(" to upload files starting with "),M=s("code"),ue=i("."),ce=i(" as well."),R=v(),B=s("br"),F=v(),$=s("h2"),pe=i("Coming Soon"),J=v(),I=s("pre"),this.h()},l(e){a=n(e,"P",{});var c=u(a);m=r(c,"In the previous article we talked about creating a static blog with SvelteKit and I pointed out some good articles as starting points. In this article, I want to share my configuration to deploy my blog to GitHub pages."),c.forEach(o),_=y(e),h=n(e,"P",{});var _e=u(h);l=r(_e,"First of all you need a public repository for hosting. You can either have two separate repositories for source code and hosted files or you can have a single repo with two branches."),_e.forEach(o),d=y(e),E=n(e,"P",{});var he=u(E);K=r(he,"In my case, I use separate repositories. Here is my packages.json scripts to build and deploy my blog."),he.forEach(o),A=y(e),k=n(e,"PRE",{class:!0});var Ge=u(k);Ge.forEach(o),N=y(e),f=n(e,"UL",{});var w=u(f);q=n(w,"LI",{});var de=u(q);j=n(de,"CODE",{});var ge=u(j);T=r(ge,"touch build/.nojekyll"),ge.forEach(o),Y=r(de," is to tell GitHub, we\u2019re not using Jekyll."),de.forEach(o),Q=y(w),D=n(w,"LI",{});var fe=u(D);G=n(fe,"CODE",{});var be=u(G);U=r(be,"echo harunzafer.com >> build/CNAME"),be.forEach(o),V=r(fe," is to tell GitHub we\u2019re using a custom domain."),fe.forEach(o),W=y(w),g=n(w,"LI",{});var C=u(g);O=n(C,"CODE",{});var ve=u(O);X=r(ve,"npx gh-pages"),ve.forEach(o),Z=r(C," will be pushing "),P=n(C,"CODE",{});var ye=u(P);ee=r(ye,"build"),ye.forEach(o),te=r(C," folder to the "),L=n(C,"CODE",{});var Ee=u(L);oe=r(Ee,"master"),Ee.forEach(o),ae=r(C," branch of"),C.forEach(o),le=y(w),b=n(w,"LI",{});var H=u(b);S=n(H,"CODE",{});var we=u(S);se=r(we,"-t true"),we.forEach(o),ie=r(H," flag is to tell "),z=n(H,"CODE",{});var ke=u(z);ne=r(ke,"gh-pages"),ke.forEach(o),re=r(H," to upload files starting with "),M=n(H,"CODE",{});var Ie=u(M);ue=r(Ie,"."),Ie.forEach(o),ce=r(H," as well."),H.forEach(o),w.forEach(o),R=y(e),B=n(e,"BR",{}),F=y(e),$=n(e,"H2",{});var Ce=u($);pe=r(Ce,"Coming Soon"),Ce.forEach(o),J=y(e),I=n(e,"PRE",{class:!0});var Oe=u(I);Oe.forEach(o),this.h()},h(){qe(k,"class","language-undefined"),qe(I,"class","language-js")},m(e,c){p(e,a,c),t(a,m),p(e,_,c),p(e,h,c),t(h,l),p(e,d,c),p(e,E,c),t(E,K),p(e,A,c),p(e,k,c),k.innerHTML=$e,p(e,N,c),p(e,f,c),t(f,q),t(q,j),t(j,T),t(q,Y),t(f,Q),t(f,D),t(D,G),t(G,U),t(D,V),t(f,W),t(f,g),t(g,O),t(O,X),t(g,Z),t(g,P),t(P,ee),t(g,te),t(g,L),t(L,oe),t(g,ae),t(f,le),t(f,b),t(b,S),t(S,se),t(b,ie),t(b,z),t(z,ne),t(b,re),t(b,M),t(M,ue),t(b,ce),p(e,R,c),p(e,B,c),p(e,F,c),p(e,$,c),t($,pe),p(e,J,c),p(e,I,c),I.innerHTML=je},p:Je,d(e){e&&o(a),e&&o(_),e&&o(h),e&&o(d),e&&o(E),e&&o(A),e&&o(k),e&&o(N),e&&o(f),e&&o(R),e&&o(B),e&&o(F),e&&o($),e&&o(J),e&&o(I)}}}function Ye(x){let a,m;const _=[x[0],De];let h={$$slots:{default:[Te]},$$scope:{ctx:x}};for(let l=0;l<_.length;l+=1)h=me(h,_[l]);return a=new Ke({props:h}),{c(){ze(a.$$.fragment)},l(l){Me(a.$$.fragment,l)},m(l,d){Ae(a,l,d),m=!0},p(l,[d]){const E=d&1?Ne(_,[d&1&&He(l[0]),d&0&&He(De)]):{};d&2&&(E.$$scope={dirty:d,ctx:l}),a.$set(E)},i(l){m||(Re(a.$$.fragment,l),m=!0)},o(l){Be(a.$$.fragment,l),m=!1},d(l){Fe(a,l)}}}const De={title:"Hosting your static blog on GitHub Pages",date:"2022-04-01",categories:["numbers","odd"],draft:!0};function Qe(x,a,m){return x.$$set=_=>{m(0,a=me(me({},a),xe(_)))},a=xe(a),[a]}class We extends Pe{constructor(a){super(),Le(this,a,Qe,Ye,Se,{})}}export{We as default,De as metadata};
