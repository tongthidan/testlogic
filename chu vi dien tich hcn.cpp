#include<iostream >
using namespace std;

main(){
	float a,b;
	cout<<"Chieu dai HCN :";
	cin>>a;
	cout<<"Chieu rong HCN :";
	cin>>b;
	if(a<0||b<0||a<b)	cout<<"Yeu cau xem lai";
	else if(a==0 && b==0 )	cout<<"Chu vi va dien tich HCN : 0"<<endl;
	else if(a>0 && b>0 && a>b){
		cout<<"Chu vi hinh chu nhat la: "<<(a+b)*2<<endl;
		cout<<"Dien tich hinh chu nhat la: "<<(a*b)<<endl;
	}
	
	


	   return 0;
}

