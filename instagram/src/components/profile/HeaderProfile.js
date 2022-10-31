import avatar from "../../assets/avatar.jpg";
import SettingIcon from "../icons/SettingIcon";

export default function HeaderProfile() {
  return (
    <div className="py-8 flex mt-5">
      <div className="max-w-[291px] ml-2 lg:ml-0 flex justify-center mr-7">
        <img src={avatar} className="w-[150px] h-[150px] rounded-full" />
      </div>
      <div>
        <div className="lg:flex items-center gap-4">
          <h1 className="text-[28px] font-light">username</h1>
          <div className="flex items-center">
            <button className="px-2 py-1 border mr-3 border-border rounded text-sm font-semibold h-[30px]">
              Profili düzenle
            </button>
            <SettingIcon />
          </div>
        </div>
        <div className="hidden lg:flex gap-5 font-normal py-5">
          <div>
            <span className="font-semibold">0</span>
            <span> gönderi</span>
          </div>
          <div>
            <span className="font-semibold">67</span>
            <span> takipçi</span>
          </div>
          <div>
            <span className="font-semibold">189</span>
            <span> takip</span>
          </div>
        </div>
        <div className="text-base font-semibold">
          <p>User Name</p>
        </div>
      </div>
    </div>
  );
}
