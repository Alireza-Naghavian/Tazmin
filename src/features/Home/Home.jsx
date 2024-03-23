import useGetAllCategories from "../../hooks/useGetAllCategories";
import useUser from "../../hooks/useUser";
import Category_capabilities from "../../ui/Category_capabilities";
import Footer from "../../ui/Footer";
import Main_Hero_Header from "../../ui/Main_Hero_Header";
import Owner_Freelancer_Banner from "../../ui/Owner_Banner";
import Tazmin_grid_properties from "../../ui/Tazmin_grid_properties";

function Home() {
  const { isUserLoading, user } = useUser();
  const { categories } = useGetAllCategories();
  return (
    <div>
      <Main_Hero_Header user={user} isUserLoading={isUserLoading} />
      <Category_capabilities categories={categories} />
      <Owner_Freelancer_Banner
        role={"برای کارفرمایان"}
        title={"به سادگی افراد متخصص را برای پروژه‌ی خود پیدا کنید"}
        desc={
          "پس از ثبت پرو‌ژه در تضمین، از هزاران فریلنسر پیشنهاد دریافت می‌کنید، و با بررسی نمونه کارها، می‌توانید بهترین پیشنهاد را انتخاب کنید."
        }
        btn_title={"ایجاد پروژه"}
        cover={"employer_final.png"}
      />
      <Tazmin_grid_properties/>
        <Owner_Freelancer_Banner
        role={"برای فریلنسر ها"}
        title={"بهترین فرصت های کاری را در تضمین پیدا کنید"}
        desc={"تضمین به شما کمک می‌کند تا علاوه بر داشتن یک رزومه‌ی کاری تاثیرگذار به راحتی از طریق جستوجو و ارسال پیشنهاد در پروژه‌ها کسب درآمد کنید."}
        btn_title={"لیست پروژه ها"}
        cover={"freelancer_final.png"}
    />

    </div>
  );
}

export default Home;
