(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{50:function(e,t,n){e.exports=n(63)},63:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(39),o=n.n(c),u=n(11),l=n(18),i=n(40),d=n(5),s=n(13),m=n(14),p=n.n(m);function E(){var e=Object(s.a)(["\n    query FetchCartItems {\n      cart @client\n    }\n  "]);return E=function(){return e},e}function g(){var e=Object(s.a)(["\n    query fetchProduct($productId: ID!) {\n      product(_id: $productId) {\n        _id\n        name\n        cost\n        description\n        weight\n        category {\n          name\n        }\n      }\n    }\n  "]);return g=function(){return e},e}function f(){var e=Object(s.a)(["\n    query fetchProducts {\n      products {\n        _id\n        name\n        description\n        cost\n      }\n    }\n  "]);return f=function(){return e},e}function h(){var e=Object(s.a)(["\n    query IsUserLoggedIn {\n      isLoggedIn @client\n    }\n  "]);return h=function(){return e},e}var v={IS_LOGGED_IN:p()(h()),FETCH_PRODUCTS:p()(f()),FETCH_PRODUCT:p()(g()),FETCH_CART_ITEMS:p()(E())},b=v.IS_LOGGED_IN,y=function(e){var t=e.component,n=e.path,a=e.exact,c=e.routeType,o=Object(i.a)(e,["component","path","exact","routeType"]);return r.a.createElement(d.d,{query:b},(function(e){var u=e.data;return"auth"===c?r.a.createElement(l.b,{path:n,exact:a,render:function(e){return u.isLoggedIn?r.a.createElement(l.a,{to:"/"}):r.a.createElement(t,e)}}):r.a.createElement(l.b,Object.assign({},o,{render:function(e){return u.isLoggedIn?r.a.createElement(t,e):r.a.createElement(l.a,{to:"/login"})}}))}))},C=v.IS_LOGGED_IN,w=function(e){return r.a.createElement(d.a,null,(function(t){return r.a.createElement(d.d,{query:C},(function(n){return n.data.isLoggedIn?r.a.createElement("div",{className:"nav"},r.a.createElement("button",{onClick:function(n){n.preventDefault(),localStorage.removeItem("auth-token"),t.writeData({data:{isLoggedIn:!1,cart:[]}}),e.history.push("/")}},"Logout"),r.a.createElement(u.b,{to:"/cart"},"Cart"),r.a.createElement(u.b,{to:"/create"},"Create A New Product")):r.a.createElement("div",{className:"nav"},r.a.createElement(u.b,{to:"/login"},"Login"),r.a.createElement(u.b,{to:"/register"},"Register"))}))}))},I=n(19),O=n(21),S=n(22),T=n(24),k=n(23),j=n(25);function _(){var e=Object(s.a)(["\n    mutation VerifyUser($token: String!) {\n      verifyUser(token: $token) {\n        loggedIn\n      }\n    }\n  "]);return _=function(){return e},e}function R(){var e=Object(s.a)(["\n    mutation CreateProduct(\n      $name: String!\n      $description: String!\n      $weight: Int!\n    ) {\n      newProduct(name: $name, description: $description, weight: $weight) {\n        _id\n        name\n        description\n        weight\n      }\n    }\n  "]);return R=function(){return e},e}function D(){var e=Object(s.a)(["\n    mutation RegisterUser($email: String!, $name: String!, $password: String!) {\n      register(email: $email, name: $name, password: $password) {\n        token\n        loggedIn\n      }\n    }\n  "]);return D=function(){return e},e}function L(){var e=Object(s.a)(["\n    mutation LoginUser($email: String!, $password: String!) {\n      login(email: $email, password: $password) {\n        token\n        loggedIn\n      }\n    }\n  "]);return L=function(){return e},e}var $={LOGIN_USER:p()(L()),REGISTER_USER:p()(D()),CREATE_PRODUCT:p()(R()),VERIFY_USER:p()(_())},U=$.LOGIN_USER,P=function(e){function t(e){var n;return Object(O.a)(this,t),(n=Object(T.a)(this,Object(k.a)(t).call(this,e))).state={email:"",password:""},n}return Object(j.a)(t,e),Object(S.a)(t,[{key:"update",value:function(e){var t=this;return function(n){return t.setState(Object(I.a)({},e,n.target.value))}}},{key:"updateCache",value:function(e,t){var n=t.data;e.writeData({data:{isLoggedIn:n.login.loggedIn}})}},{key:"render",value:function(){var e=this;return r.a.createElement(d.c,{mutation:U,onCompleted:function(t){var n=t.login.token;localStorage.setItem("auth-token",n),e.props.history.push("/")},update:function(t,n){return e.updateCache(t,n)}},(function(t){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(n){n.preventDefault(),t({variables:{email:e.state.email,password:e.state.password}})}},r.a.createElement("input",{value:e.state.email,onChange:e.update("email"),placeholder:"Email"}),r.a.createElement("input",{value:e.state.password,onChange:e.update("password"),type:"password",placeholder:"Password"}),r.a.createElement("button",{type:"submit"},"Log In")))}))}}]),t}(a.Component),q=$.REGISTER_USER,N=function(e){function t(e){var n;return Object(O.a)(this,t),(n=Object(T.a)(this,Object(k.a)(t).call(this,e))).state={name:"",email:"",password:""},n}return Object(j.a)(t,e),Object(S.a)(t,[{key:"update",value:function(e){var t=this;return function(n){return t.setState(Object(I.a)({},e,n.target.value))}}},{key:"updateCache",value:function(e,t){var n=t.data;e.writeData({data:{isLoggedIn:n.register.loggedIn}})}},{key:"render",value:function(){var e=this;return r.a.createElement(d.c,{mutation:q,onCompleted:function(t){var n=t.register.token;localStorage.setItem("auth-token",n),e.props.history.push("/")},update:function(t,n){return e.updateCache(t,n)}},(function(t){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(n){n.preventDefault(),t({variables:{name:e.state.name,email:e.state.email,password:e.state.password}})}},r.a.createElement("input",{value:e.state.name,onChange:e.update("name"),placeholder:"Name"}),r.a.createElement("input",{value:e.state.email,onChange:e.update("email"),placeholder:"Email"}),r.a.createElement("input",{value:e.state.password,onChange:e.update("password"),type:"password",placeholder:"Password"}),r.a.createElement("button",{type:"submit"},"Register")))}))}}]),t}(a.Component),F=v.FETCH_PRODUCTS,x=function(){return r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement(d.d,{query:F},(function(e){var t=e.loading,n=e.error,a=e.data;return t?r.a.createElement("p",null,"Loading..."):n?r.a.createElement("p",null,"Error"):a.products.map((function(e){var t=e._id,n=e.name,a=e.cost,c=e.description;return r.a.createElement("li",{key:t},r.a.createElement(u.b,{to:"/products/".concat(t)},r.a.createElement("h4",null,n)),r.a.createElement("p",{className:"cost"},"Cost: ",a),r.a.createElement("p",{className:"cost"},"Description: ",c))}))}))))},G=n(48),H=v.FETCH_CART_ITEMS,Q=function(e){return r.a.createElement(d.a,null,(function(t){return r.a.createElement(d.d,{query:H,variables:{productId:e.id}},(function(n){var a=n.loading,c=n.error,o=n.data;return a?r.a.createElement("p",null,"Loading..."):c?r.a.createElement("p",null,"Error"):o.cart.some((function(t){return t.id===e.id}))?r.a.createElement("button",{onClick:function(n){n.preventDefault();var a={cart:t.readQuery({query:H}).cart.filter((function(t){return t.id!==e.id}))};t.writeQuery({query:H,data:a})}},"Remove from cart"):r.a.createElement("button",{onClick:function(n){n.preventDefault();var a=t.readQuery({query:H}).cart,r={cart:[].concat(Object(G.a)(a),[{id:e.id,cost:e.cost}])};t.writeQuery({query:H,data:r})}},"Add to cart")}))}))},A=v.FETCH_PRODUCT,M=function(e){return r.a.createElement("div",null,r.a.createElement(d.d,{query:A,variables:{productId:e.match.params.productId}},(function(e){var t=e.loading,n=e.error,a=e.data;if(t)return r.a.createElement("p",null,"Loading...");if(n)return r.a.createElement("p",null,"Error");var c="None";return a.product.category&&(c=a.product.category.name),r.a.createElement("div",null,r.a.createElement("p",null,"Name: ",a.product.name),r.a.createElement("p",null,"Weight: ",a.product.weight," lbs."),r.a.createElement("p",null,"Description: ",a.product.description),r.a.createElement("p",null,"Price: $",a.product.cost),r.a.createElement("p",null,"Category: ",c),r.a.createElement(Q,{id:a.product._id,cost:a.product.cost}))})))},V=$.CREATE_PRODUCT,W=v.FETCH_PRODUCTS,J=function(e){function t(e){var n;return Object(O.a)(this,t),(n=Object(T.a)(this,Object(k.a)(t).call(this,e))).state={message:"",name:"",weight:"",description:""},n}return Object(j.a)(t,e),Object(S.a)(t,[{key:"handleUpdate",value:function(e){e.preventDefault(),this.setState(Object(I.a)({},e.target.name,e.target.value))}},{key:"update",value:function(e){var t=this;return function(n){return t.setState(Object(I.a)({},e,n.target.value))}}},{key:"updateCache",value:function(e,t){var n,a=t.data;console.log("here");try{n=e.readQuery({query:W})}catch(o){return}if(n){var r=n.products,c=a.newProduct;e.writeQuery({query:W,data:{products:r.concat(c)}})}}},{key:"handleSubmit",value:function(e,t){e.preventDefault(),t({variables:{name:this.state.name,description:this.state.description,weight:parseInt(this.state.weight)}})}},{key:"render",value:function(){var e=this;return r.a.createElement(d.c,{mutation:V,onError:function(t){return e.setState({message:t.message})},update:function(t,n){return e.updateCache(t,n)},onCompleted:function(t){var n=t.newProduct.name;e.setState({message:"New product ".concat(n," created successfully")})}},(function(t,n){n.data;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(n){return e.handleSubmit(n,t)}},r.a.createElement("input",{onChange:e.update("name"),value:e.state.name,placeholder:"Name"}),r.a.createElement("textarea",{onChange:e.update("description"),value:e.state.description,placeholder:"description"}),r.a.createElement("input",{onChange:e.update("weight"),value:e.state.weight,placeholder:"Weight",type:"number"}),r.a.createElement("button",{type:"submit"},"Create Product")),r.a.createElement("p",null,e.state.message))}))}}]),t}(a.Component),Y=v.FETCH_PRODUCT,z=function(e){return r.a.createElement(d.d,{query:Y,variables:{productId:e.id}},(function(e){var t=e.loading,n=e.error,a=e.data;return t?r.a.createElement("p",null,"Loading..."):n?r.a.createElement("p",null,"Error"):r.a.createElement("div",null,r.a.createElement("p",null,"Name: ",a.product.name),r.a.createElement("p",null,"Weight: ",a.product.weight," lbs."),r.a.createElement("p",null,"Description: ",a.product.description),r.a.createElement("p",null,"Price: $",a.product.cost),r.a.createElement("hr",null))}))},B=v.FETCH_CART_ITEMS;function K(){return r.a.createElement(d.d,{query:B},(function(e){var t=e.data,n=e.loading,a=e.error;if(n)return r.a.createElement("p",null,"Loading...");if(a)return r.a.createElement("p",null,"Error: ",a.message);var c=0;return r.a.createElement("div",null,r.a.createElement("h3",null,"Shopping Cart"),t.cart&&t.cart.length?r.a.createElement("div",null,t.cart.map((function(e){return c+=e.cost,r.a.createElement(z,{key:e.id,id:e.id})})),r.a.createElement("b",null,"Total: $",c)):r.a.createElement("p",null,"The cart is empty"))}))}var X,Z=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement(u.b,{to:"/"},"Online Store")),r.a.createElement(l.b,{path:"/",component:w}),r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/",component:x}),r.a.createElement(y,{exact:!0,path:"/products/:productId",component:M,routeType:"protected"}),r.a.createElement(y,{exact:!0,path:"/create",component:J,routeType:"protected"}),r.a.createElement(y,{exact:!0,path:"/cart",component:K,routeType:"protected"}),r.a.createElement(y,{exact:!0,path:"/login",component:P,routeType:"auth"}),r.a.createElement(y,{exact:!0,path:"/register",component:N,routeType:"auth"})))},ee=n(26),te=n(47),ne=n(49),ae=n(8),re=n(46),ce=$.VERIFY_USER,oe=new te.a({dataIdFromObject:function(e){return e._id||null}}),ue=Object(re.a)((function(e){var t=e.graphQLErrors;t&&t.map((function(e){var t=e.message;return console.log(t)}))}));X="/graphql";var le=Object(ne.a)({uri:X,headers:{authorization:localStorage.getItem("auth-token")}}),ie=new ee.c({link:ae.a.from([ue,le]),cache:oe,onError:function(e){var t=e.networkError,n=e.graphQLErrors;console.log("graphQLErrors",n),console.log("networkError",t)}});oe.writeData({data:{isLoggedIn:!1,cart:[]}});var de=localStorage.getItem("auth-token");de&&ie.mutate({mutation:ce,variables:{token:de}}).then((function(e){var t=e.data;oe.writeData({data:{isLoggedIn:t.verifyUser.loggedIn,cart:[]}})}));o.a.render(r.a.createElement((function(){return r.a.createElement(d.b,{client:ie},r.a.createElement(u.a,null,r.a.createElement(Z,null)))}),null),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.139a372c.chunk.js.map