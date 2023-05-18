function AlertButton({message, children}){
  return (
    <button
    onClick={()=>alert(message)}
    >{children}</button>
  );
}
export default function ToolBar(){
  return (
    <div>
      <AlertButton message="playing">
      play movie
     </AlertButton>
     <AlertButton message="Uploading">
      upload movie
     </AlertButton>
    </div>
  )
}
