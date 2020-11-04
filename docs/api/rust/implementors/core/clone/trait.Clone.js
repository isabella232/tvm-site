(function() {var implementors = {};
implementors["tvm"] = [{"text":"impl Clone for ConstIntBound","synthetic":false,"types":[]},{"text":"impl Clone for Attrs","synthetic":false,"types":[]},{"text":"impl Clone for Diagnostic","synthetic":false,"types":[]},{"text":"impl Clone for DiagnosticRenderer","synthetic":false,"types":[]},{"text":"impl Clone for DiagnosticContext","synthetic":false,"types":[]},{"text":"impl Clone for BaseExpr","synthetic":false,"types":[]},{"text":"impl Clone for PrimExpr","synthetic":false,"types":[]},{"text":"impl Clone for GlobalVar","synthetic":false,"types":[]},{"text":"impl Clone for BaseFunc","synthetic":false,"types":[]},{"text":"impl Clone for IRModule","synthetic":false,"types":[]},{"text":"impl Clone for Op","synthetic":false,"types":[]},{"text":"impl Clone for Conv2DAttrs","synthetic":false,"types":[]},{"text":"impl Clone for BiasAddAttrs","synthetic":false,"types":[]},{"text":"impl Clone for DenseAttrs","synthetic":false,"types":[]},{"text":"impl Clone for GlobalPool2DAttrs","synthetic":false,"types":[]},{"text":"impl Clone for MaxPool2DAttrs","synthetic":false,"types":[]},{"text":"impl Clone for SoftmaxAttrs","synthetic":false,"types":[]},{"text":"impl Clone for BatchNormAttrs","synthetic":false,"types":[]},{"text":"impl Clone for ExpandDimsAttrs","synthetic":false,"types":[]},{"text":"impl Clone for Expr","synthetic":false,"types":[]},{"text":"impl Clone for Id","synthetic":false,"types":[]},{"text":"impl Clone for Constant","synthetic":false,"types":[]},{"text":"impl Clone for Tuple","synthetic":false,"types":[]},{"text":"impl Clone for Var","synthetic":false,"types":[]},{"text":"impl Clone for Call","synthetic":false,"types":[]},{"text":"impl Clone for Let","synthetic":false,"types":[]},{"text":"impl Clone for If","synthetic":false,"types":[]},{"text":"impl Clone for TupleGetItem","synthetic":false,"types":[]},{"text":"impl Clone for RefCreate","synthetic":false,"types":[]},{"text":"impl Clone for RefRead","synthetic":false,"types":[]},{"text":"impl Clone for RefWrite","synthetic":false,"types":[]},{"text":"impl Clone for Constructor","synthetic":false,"types":[]},{"text":"impl Clone for Pattern","synthetic":false,"types":[]},{"text":"impl Clone for PatternWildcard","synthetic":false,"types":[]},{"text":"impl Clone for PatternVar","synthetic":false,"types":[]},{"text":"impl Clone for PatternConstructor","synthetic":false,"types":[]},{"text":"impl Clone for PatternTuple","synthetic":false,"types":[]},{"text":"impl Clone for Clause","synthetic":false,"types":[]},{"text":"impl Clone for Match","synthetic":false,"types":[]},{"text":"impl Clone for Function","synthetic":false,"types":[]},{"text":"impl Clone for Source","synthetic":false,"types":[]},{"text":"impl Clone for SourceMap","synthetic":false,"types":[]},{"text":"impl Clone for SourceName","synthetic":false,"types":[]},{"text":"impl Clone for Span","synthetic":false,"types":[]},{"text":"impl Clone for IntImm","synthetic":false,"types":[]},{"text":"impl Clone for Var","synthetic":false,"types":[]},{"text":"impl Clone for Add","synthetic":false,"types":[]},{"text":"impl Clone for Sub","synthetic":false,"types":[]},{"text":"impl Clone for Mul","synthetic":false,"types":[]},{"text":"impl Clone for Div","synthetic":false,"types":[]},{"text":"impl Clone for Mod","synthetic":false,"types":[]},{"text":"impl Clone for FloorDiv","synthetic":false,"types":[]},{"text":"impl Clone for FloorMod","synthetic":false,"types":[]},{"text":"impl Clone for Min","synthetic":false,"types":[]},{"text":"impl Clone for Max","synthetic":false,"types":[]},{"text":"impl Clone for Cast","synthetic":false,"types":[]},{"text":"impl Clone for Ramp","synthetic":false,"types":[]},{"text":"impl Clone for Select","synthetic":false,"types":[]},{"text":"impl Clone for Eq","synthetic":false,"types":[]},{"text":"impl Clone for Ne","synthetic":false,"types":[]},{"text":"impl Clone for Lt","synthetic":false,"types":[]},{"text":"impl Clone for Le","synthetic":false,"types":[]},{"text":"impl Clone for Gt","synthetic":false,"types":[]},{"text":"impl Clone for Ge","synthetic":false,"types":[]},{"text":"impl Clone for And","synthetic":false,"types":[]},{"text":"impl Clone for Or","synthetic":false,"types":[]},{"text":"impl Clone for Not","synthetic":false,"types":[]},{"text":"impl Clone for Let","synthetic":false,"types":[]},{"text":"impl Clone for Type","synthetic":false,"types":[]},{"text":"impl Clone for PrimType","synthetic":false,"types":[]},{"text":"impl Clone for PointerType","synthetic":false,"types":[]},{"text":"impl Clone for TypeVar","synthetic":false,"types":[]},{"text":"impl Clone for GlobalTypeVar","synthetic":false,"types":[]},{"text":"impl Clone for TupleType","synthetic":false,"types":[]},{"text":"impl Clone for TypeConstraint","synthetic":false,"types":[]},{"text":"impl Clone for FuncType","synthetic":false,"types":[]},{"text":"impl Clone for IncompleteType","synthetic":false,"types":[]},{"text":"impl Clone for RefType","synthetic":false,"types":[]},{"text":"impl Clone for BaseTensorType","synthetic":false,"types":[]},{"text":"impl Clone for TensorType","synthetic":false,"types":[]},{"text":"impl Clone for PassInfo","synthetic":false,"types":[]}];
implementors["tvm_rt"] = [{"text":"impl Clone for ObjectRef","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;IsObject&gt; Clone for ObjectPtr&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Clone for String","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone + IsObjectRef&gt; Clone for Array&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Clone for Function","synthetic":false,"types":[]},{"text":"impl&lt;K:&nbsp;Clone, V:&nbsp;Clone&gt; Clone for Map&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: IsObjectRef,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: IsObjectRef,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Clone for Module","synthetic":false,"types":[]},{"text":"impl Clone for NDArray","synthetic":false,"types":[]}];
implementors["tvm_sys"] = [{"text":"impl Clone for DLContext","synthetic":false,"types":[]},{"text":"impl Clone for DLDataType","synthetic":false,"types":[]},{"text":"impl Clone for DLTensor","synthetic":false,"types":[]},{"text":"impl Clone for DLManagedTensor","synthetic":false,"types":[]},{"text":"impl Clone for TVMValue","synthetic":false,"types":[]},{"text":"impl Clone for TVMByteArray","synthetic":false,"types":[]},{"text":"impl Clone for TVMParallelGroupEnv","synthetic":false,"types":[]},{"text":"impl Clone for DeviceType","synthetic":false,"types":[]},{"text":"impl Clone for Context","synthetic":false,"types":[]},{"text":"impl Clone for DataType","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Clone for ArgValue&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Clone for RetValue","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()