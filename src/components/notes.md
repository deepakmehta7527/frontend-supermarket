    <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Register/>}/>
                <Route path="/thanks" element={<Thanks/>}/>
                <Route path="/searchuser" element={<SearchUser/>}/>
                <Route path="/listofmembers"  element={<AdminRoutesProtector compname={ListofUsers}/>}/>
                <Route path="/changepassword" element={<UserRoutesProtector compname={ChangePassword}/>}/>
                <Route path="/adminhome" element={<AdminRoutesProtector compname={AdminHome}/>}/>
                <Route path="/createadmin"  element={<AdminRoutesProtector compname={CreateAdmin}/>}/>
                <Route path="/managecategory" element={<UserRoutesProtector compname={ManageCategory}/>}/>
                <Route path="/managesubcategory"  element={<AdminRoutesProtector compname={ManageSubCategory}/>}/>
                <Route path="/manageproduct" element={<AdminRoutesProtector compname={ManageProduct}/>}/>
                <Route path="/updateproduct"  element={<AdminRoutesProtector compname={UpdateProduct}/>}/>
                <Route path="/category"  element={<AdminRoutesProtector compname={Category}/>}/>
                <Route path="/subcategory" element={<AdminRoutesProtector compname={SubCategory}/>}/>
                <Route path="/products"element={<Products/>}/>
                <Route path="/details" element={<UserRoutesProtector compname={Details}/>}/>
                <Route path="/showcart" element={<UserRoutesProtector compname={ShowCart}/>}/>
                <Route path="/checkout"  element={<UserRoutesProtector compname={Checkout}/>}/>
                <Route path="/ordersummary" element={<UserRoutesProtector compname={OrderSummary}/>}/>
                <Route path="/vieworders" element={<UserRoutesProtector compname={ViewOrders}/>}/>
                <Route path="/orderitems" element={<UserRoutesProtector compname={OrderItems}/>}/>
                <Route path="/updatestatus" element={<UpdateStatus/>}/>
                <Route path="/orderhistory" element={<UserRoutesProtector compname={OrderHistory}/>}/>
                <Route path="/searchresults"  element={<UserRoutesProtector compname={SearchResults}/>}/>
                <Route path="/contactus"  element={<ContactUs/>}/>
                <Route path="/activate"  element={<UserRoutesProtector compname={Activate}/>}/>
                <Route path="/forgotpassword"  element={<UserRoutesProtector compname={ForgotPassword}/>}/>
                <Route path="/resetpassword" element={<UserRoutesProtector compname={ResetPassword}/>}/>
                <Route path="/showposts" element={<OtherAPI/>}/>
