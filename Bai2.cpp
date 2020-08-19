#include<iostream >
using namespace std;


main(){
	int n;
	cin>>n;
	
	if(n>0 )	cout<<"So nguyen n la so duong"<<endl;
	else if(n<0)	cout<<"So nguyen n la so am"<<endl;
	
	if(n%2==0)	cout<<"So nguyen n la so chan"<<endl;
	else cout<<"So nguyen n la so le "<<endl;


	   return 0;
}

