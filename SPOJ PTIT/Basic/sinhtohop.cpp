#include<iostream>
#include<math.h>
using namespace std;
int n,k, a[10];
void in(){
	for(int i = 1; i <= k; i++){
		cout<<a[i]<<" ";
	}
	cout<<endl;
}
int OK = 0;
void sinhtohop(){
	int i = k;
	while( i > 0 && a[i] == n- k+i)	i--;
	if(i > 0){
		a[i]++;
		for(int j = i+1; j<=k; j++){
			a[j] = a[i] + j - i;
		}
	}
	else OK = 1;
}
int main(){
	cin>>n>>k;
	for(int i = 1; i <= k; i++){
		a[i] = i;
	}
	while(OK != 1){
		in();
		sinhtohop();
	}
	return 0;
}

