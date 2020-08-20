#include<iostream >
using namespace std;
main(){
	float a,b,c;
	cout<<" Ba canh cua tam giac : ";
	cin>>a>>b>>c;
	if(a+b>c|| a+c>b|| b+c> a){
		cout<<" Ba so vua nhap la ba canh cua mot tam giac"<<endl;
		if(a==b==c)
			cout<<"Tam giac la deu "<<endl;
		else if(a==b||a==c||b==c)
			cout<<"Tam giac la can"<<endl;
		else if(a*a== b*b+c*c|| b*b== c*c+ a*a || c*c == a*a +b*b)
			cout<<" Tam giac la tam giac vuong"<<endl;
		else if((a*a == b*b+c*c)&&(b==c)|| (b*b== c*c+ a*a) && (a==c) || (c*c == a*a +b*b)&&(a==b))
			cout<<"Tam giac la tam giac vuong can"<<endl;
		else 
			cout<<"Tam giac la tam giac thuong "<<endl;
	}	
	else
		cout<<" Ba so vua nhap khong phai ba canh cua mot tam gia "<<endl;
	
}

