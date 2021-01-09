(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,h=u["".concat(i,".").concat(d)]||u[d]||p[d]||l;return n?r.a.createElement(h,o(o({ref:t},s),{},{components:n})):r.a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),l=(n(0),n(124)),i={id:"ch04",title:"Chapter 4: Procedures, Functions, and Control Flow",sidebar_label:"Chapter 4: Procedures, Functions, and Control Flow"},o={unversionedId:"ch04",id:"ch04",isDocsHomePage:!1,title:"Chapter 4: Procedures, Functions, and Control Flow",description:"\x3c!---",source:"@site/../CQL_Guide/ch04.md",slug:"/ch04",permalink:"/cql-guide/ch04",version:"current",lastUpdatedBy:"Raoul Foaleng",lastUpdatedAt:1610165489,sidebar_label:"Chapter 4: Procedures, Functions, and Control Flow",sidebar:"someSidebar",previous:{title:"Chapter 3: Expressions, Literals, Nullability, Sensitivity",permalink:"/cql-guide/ch03"},next:{title:"Chapter 5: Types of Cursors, OUT and OUT UNION, and FETCH flavors",permalink:"/cql-guide/ch05"}},c=[{value:"Out Parameters",id:"out-parameters",children:[]},{value:"Procedure Calls",id:"procedure-calls",children:[]},{value:"The IF statement",id:"the-if-statement",children:[]},{value:"The WHILE statement",id:"the-while-statement",children:[]},{value:"The TRY, CATCH, and THROW Statements",id:"the-try-catch-and-throw-statements",children:[]},{value:"Procedures as Functions: Motivation and Example",id:"procedures-as-functions-motivation-and-example",children:[]}],s={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"All kinds of control flow happens in the context of some procedure, though we've already introduced examples of procedures let's\nnow go over some of the additional aspects we have not yet illustrated."),Object(l.b)("h3",{id:"out-parameters"},"Out Parameters"),Object(l.b)("p",null,"Consider this procedure:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"create procedure echo (in arg1 integer not null, out arg2 integer not null)\nbegin \n  set arg2 := arg1; \nend;\n")),Object(l.b)("p",null,"Here ",Object(l.b)("inlineCode",{parentName:"p"},"arg2")," has been declared ",Object(l.b)("inlineCode",{parentName:"p"},"out"),'.  CQL out parameters are very similar to "by reference" arguments in other langauges and\nindeed they compile into a simple pointer reference in the generated C code.  One notable difference is that, in CQL, ',Object(l.b)("inlineCode",{parentName:"p"},"out")," parameters\nfor reference types and nullable types are always set to NULL by default.  This is another way that an otherwise non-null reference\nvariable can end up with a null in it."),Object(l.b)("p",null,"Looking at the one line in the body of this procedure:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"  set arg2 := arg1; \n")),Object(l.b)("p",null,"The input argument ",Object(l.b)("inlineCode",{parentName:"p"},"arg1")," is unconditionally stored in the output.  Note that the ",Object(l.b)("inlineCode",{parentName:"p"},"in")," keyword is entirely optional and does\nnothing other than perhaps add some clarity.  CQL also supports ",Object(l.b)("inlineCode",{parentName:"p"},"inout")," arguments which are expected to contain non-garbage values on\nentry.  If the procedure is called from CQL, the compiler will arrange for this to be true."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"in")," arguments contain a valid value"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"out")," arguments are assumed to contain garbage and are aggressively cleared on entry"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"inout")," arguments contain a valid value")),Object(l.b)("p",null,"These invariants are very important when considering how reference types are handled."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"in")," reference arguments are borrowed, CQL will not further retain unless they are stored elsewhere"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"out")," reference arguments are assumed to be garbage, they are not released on entry, but instead set to NULL"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"inout")," reference arguments are assumed valid at entry")),Object(l.b)("p",null,"If CQL changes an ",Object(l.b)("inlineCode",{parentName:"p"},"out")," or ",Object(l.b)("inlineCode",{parentName:"p"},"inout")," value it first releases the existing value and then retains the new value.\nIn all cases the caller will ultimately release any non-null out reference either because it was borrowed (",Object(l.b)("inlineCode",{parentName:"p"},"in"),") or\nthe caller now/still owns it (",Object(l.b)("inlineCode",{parentName:"p"},"inout")," or ",Object(l.b)("inlineCode",{parentName:"p"},"in"),").  "),Object(l.b)("p",null,"Aggressively putting ",Object(l.b)("inlineCode",{parentName:"p"},"NULL")," into ",Object(l.b)("inlineCode",{parentName:"p"},"out")," argumetns normalizes pointer handling for all ",Object(l.b)("inlineCode",{parentName:"p"},"out")," types."),Object(l.b)("h3",{id:"procedure-calls"},"Procedure Calls"),Object(l.b)("p",null,"The usual ",Object(l.b)("inlineCode",{parentName:"p"},"call")," syntax is used to invoke a procedure.  It returns no value but it can have any number of ",Object(l.b)("inlineCode",{parentName:"p"},"out")," arguments."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"  declare scratch integer not null; \n  call echo(12, scratch); \n  scratch == 12; -- true\n")),Object(l.b)("p",null,"The let's go over the most essential bits of control flow."),Object(l.b)("h3",{id:"the-if-statement"},"The IF statement"),Object(l.b)("p",null,"The CQL ",Object(l.b)("inlineCode",{parentName:"p"},"IF")," statement has no syntatic ambiguities at the expense of being somewhat more verbose than many other languages.\nIn CQL the ",Object(l.b)("inlineCode",{parentName:"p"},"ELSE IF")," portion is baked into the ",Object(l.b)("inlineCode",{parentName:"p"},"IF")," statement, so what you see below is logically a single statement."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"create proc checker(foo integer, out result integer not null)\nbegin\n  if foo = 1 then\n   set result := 1;\n  else if foo = 2 then\n   set result := 3; \n  else\n   set result := 5;\n  end if;\nend;\n")),Object(l.b)("h3",{id:"the-while-statement"},"The WHILE statement"),Object(l.b)("p",null,"What follows is a simple procedure that counts down its input argument."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"create proc looper(x integer not null)\nbegin\n  while x > 0\n  begin\n   call printf('%d\\n', x);\n   set x := x - 1;\n  end;\nend;\n")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"WHILE")," loop has additional keywords that can be used within it to better control the loop.  A more general\nloop might look like this:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"create proc looper(x integer not null)\nbegin\n  while 1\n  begin\n   set x := x - 1;\n   if x < 0 then\n     leave;\n   else if x % 100 = 0 then\n     continue;\n   else if x % 10 = 0\n     call printf('%d\\n', x);\n   end if;\n  end;\nend;\n")),Object(l.b)("p",null,"Let's go over this peculiar loop:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"  while 1\n  begin\n    ...\n  end;\n")),Object(l.b)("p",null,"This is an immediate sign that there will be an unusual exit condition.  The loop will never end without one because ",Object(l.b)("inlineCode",{parentName:"p"},"1")," will never be false."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"   if x < 0 then\n     leave;\n")),Object(l.b)("p",null,"Now here we've encoded our exit condition a bit strangely we might have done the equivalent job with a normal conditionn in the predicate\npart of the ",Object(l.b)("inlineCode",{parentName:"p"},"while")," statement but for illustration anyway, when x becomes negative ",Object(l.b)("inlineCode",{parentName:"p"},"leave")," will cause us to exit the loop.  This is like\n",Object(l.b)("inlineCode",{parentName:"p"},"break")," in C."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"   else if x % 100 = 0 then\n     continue;\n")),Object(l.b)("p",null,"This bit says that on every 100th iteration we go back to the start of the loop.  So the next bit will not run, which is the printing."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"   else if x % 10 = 0\n     call printf('%d\\n', x);\n   end if;\n")),Object(l.b)("p",null,"Finishing up the control flow, on every 10th iteration we print the value of the loop variable."),Object(l.b)("h3",{id:"the-try-catch-and-throw-statements"},"The TRY, CATCH, and THROW Statements"),Object(l.b)("p",null,"This example illustrates catching an error from some DML, and recovering rather than letting the error cascade up.",Object(l.b)("br",{parentName:"p"}),"\n",'This is the common "upsert" pattern (insert or update)'),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),'create procedure upsert_foo(id_ integer, t_ text)\nbegin\n  begin try\n    insert into foo(id, t) values(id_, t_)\n  end try; \n  begin catch \n    begin try\n      update foo set t = t_ where id = id_;\n    end try;\n    begin catch\n      printf("Error!\\n");\n      throw;\n    end catch;\n  end catch; \nend;\n')),Object(l.b)("p",null,"Once again, let's go over this section by section:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"  begin try\n    insert into foo(id, t) values(id_, t_)\n  end try; \n")),Object(l.b)("p",null,"Normally if the ",Object(l.b)("inlineCode",{parentName:"p"},"insert")," statement fails, the procedure will exit with a failure result code.  Here, instead,\nwe prepare to catch that error."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"  begin catch \n    begin try\n      update foo set t = t_ where id = id_;\n    end try;\n")),Object(l.b)("p",null,"Now, having failed to insert, presumably because a row with the provided ",Object(l.b)("inlineCode",{parentName:"p"},"id")," already exists, we try to update\nthat row instead.  However that might also fail, so we  wrap it in another try.  If the update fails, then there is a final catch block:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),'    begin catch\n      printf("Error!\\n");\n      throw;\n    end catch;\n')),Object(l.b)("p",null,"Here we print a diagnostic message and then use the ",Object(l.b)("inlineCode",{parentName:"p"},"throw")," keyword to rethrow the previous failure.  Throw will create a failure in\nthe current block using the most recent result code from SQLite if it is an error, or else the general ",Object(l.b)("inlineCode",{parentName:"p"},"SQLITE_ERROR")," result code\nif there is no such error.  In this case the failure code for the ",Object(l.b)("inlineCode",{parentName:"p"},"update")," statement will become the result code of the current procedure."),Object(l.b)("p",null,"This leaves only the closing markers:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"  end catch; \nend;\n")),Object(l.b)("p",null,"If control flow reaches the normal end of the procedure it will return ",Object(l.b)("inlineCode",{parentName:"p"},"SQLITE_OK"),".  "),Object(l.b)("h3",{id:"procedures-as-functions-motivation-and-example"},"Procedures as Functions: Motivation and Example"),Object(l.b)("p",null,"The calling convention for CQL stored procedures often (usually) requires that the procedure returns a result code from SQLite.",Object(l.b)("br",{parentName:"p"}),"\n","This makes it impossible to write a procedure that returns a result like a function, the result position is already used for\nthe error code.  You can get around this problem by using ",Object(l.b)("inlineCode",{parentName:"p"},"out")," arguments as your return codes.  So for instance, this version\nof the Fibonacci function is possible."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"-- this works, but it is awkward\ncreate procedure fib (in arg integer not null, out result integer not null) \nbegin\n  if (arg <= 2) then\n    set result := 1;\n  else \n    declare t integer not null; \n    call fib(arg - 1,  result); \n    call fib(arg - 2,  t); \n    set result := t + result;\n  end if; \nend;\n")),Object(l.b)("p",null,"The above works, but the notation is very awkward."),Object(l.b)("p",null,'CQL has a "procedures as functions" feature that tries to make this more pleasant by making it possible to use function call notation\non a procedure whose last argument is an ',Object(l.b)("inlineCode",{parentName:"p"},"out")," variable.  You simply call the procedure like it was a function and omit the last argument in the call.\nA temporary variable is automatically created to hold the result and that temporary becomes the logical return of the function.\nFor semantic analysis, the result type of the function becomes the type of the ",Object(l.b)("inlineCode",{parentName:"p"},"out")," argument."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"-- rewritten with function call syntax\ncreate procedure fib (in arg integer not null, out result integer not null) \nbegin\n  if (arg <= 2) then\n    set result := 1;\n  else \n    set result := fib(arg - 1) + fib(arg - 2);\n  end if; \nend;\n")),Object(l.b)("p",null,"This form is allowed when:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"all but the last argument of the procedure was specified"),Object(l.b)("li",{parentName:"ul"},"the formal parameter for that last argument was marked with ",Object(l.b)("inlineCode",{parentName:"li"},"out")," (neither ",Object(l.b)("inlineCode",{parentName:"li"},"in")," nor ",Object(l.b)("inlineCode",{parentName:"li"},"inout")," are acceptable)"),Object(l.b)("li",{parentName:"ul"},"the procedure did not also be returning a result set using a ",Object(l.b)("inlineCode",{parentName:"li"},"select")," statement or ",Object(l.b)("inlineCode",{parentName:"li"},"out")," statement (more on these later)")),Object(l.b)("p",null,"If the procedure in question uses SQLite, or calls something that uses SQLite, then it might fail.",Object(l.b)("br",{parentName:"p"}),"\n","If that happens the result code will propagate just like it would have with a the usual ",Object(l.b)("inlineCode",{parentName:"p"},"call")," form.",Object(l.b)("br",{parentName:"p"}),"\n","Any failures can be caught with ",Object(l.b)("inlineCode",{parentName:"p"},"try/catch"),' as usual.\nThis feature is really only syntatic sugar for the "awkward" form above, but it does allow for slightly better generated C code.'))}b.isMDXComponent=!0}}]);