#include<iostream >
using namespace std;
#define pi 3.14

main(){
	float r;
	cout<<"Ban kinh hinh tron: ";
	cin>>r;
	if(r<0)	cout<<"Ban kinh am. Yeu cau nhap lai"<<endl;
	else if(r==0)	cout<<"Chu vi va dien tich hinh tron: 0"<<endl;
	else{
		cout<<"Chu vi hinh tron: "<<(r*2*pi)<<endl;
		cout<<"Dien tich hinh tron: "<<(r*r*pi)<<endl;
	}
	
	



	   return 0;
}

