export default function Books () {
    const name = "khettawan Hoysang";
    const profile = "/images/12220.jpg";
    const info = " นักศึกษา คณะบริหารธุรกิจและเทคโนโลยีสารสนเทศเรียนสาขาเทคโนโลยี หรือ IT ที่มหาลัยเทคโนโลยีราชมงคลตะวันออก วิทยาลัยเขตจักรพงษภูวนารถ";

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src={profile} title={name} />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{name}</div>
    <p className="text-gray-700 text-base">
    {info}
    </p>
  </div>
</div>
    );

}