import useGetAllCategories from "../../hooks/useGetAllCategories";
import useUser from "../../hooks/useUser";
import Category_capabilities from "../../ui/Category_capabilities";
import Main_Hero_Header from "../../ui/Main_Hero_Header";
import Owner_Banner from "../../ui/Owner_Banner";

function Home() {
 const {isUserLoading,user} =useUser();
 const {categories } = useGetAllCategories();
  return (
<div>
  <Main_Hero_Header user={user} isUserLoading={isUserLoading}/>
  <Category_capabilities categories={categories} />
  <Owner_Banner role={"برای کارفرمایان"} 
  title={"به سادگی افراد متخصص را برای پروژه‌ی خود پیدا کنید"}
  desc={"پس از ثبت پرو‌ژه در تضمین، از هزاران فریلنسر پیشنهاد دریافت می‌کنید، و با بررسی نمونه کارها، می‌توانید بهترین پیشنهاد را انتخاب کنید."}
  btn_title={"ایجاد پروژه"}
  cover={"employer_final.png"}
  />
</div>
  );
}

export default Home;
