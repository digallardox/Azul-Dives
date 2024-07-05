export default function Information({title, value = "null"}){
    return (
      <>
        <div className="flex align-center justify-between py-[25px]">
          <div>
            <span className="block font-medium">{ title }</span>
            <span className="block">{ value }</span>
          </div>
          <div className="underline">Edit</div>
        </div>
        <hr />
      </>
    );
}