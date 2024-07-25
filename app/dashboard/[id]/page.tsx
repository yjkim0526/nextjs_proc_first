export default function DashboardDetailPage({ params, searchParams }){
    console.log(params);
    console.log(searchParams);
    return <main>DashboardDetailPage : { params.id } {searchParams.code} </main>;
}